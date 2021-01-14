<template>
  <div id="app" v-cloak>
    <div v-if="authenticated == true" class="d-flex" id="wrapper">
      <CompSidebar v-bind:itemActive="itemActive" />
      <CompBody
        v-on:deletePartner="deletePartner"
        v-on:updateInfoUser="updateInfoUser"
        v-on:deletePost="deletePost"
        v-bind:user="user"
        v-bind:list_posts="list_posts"
        v-bind:itemActive="itemActive"
      />
    </div>
    <b-alert
      class="fixed-top"
      style="width:50%;left:25%"
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >{{message}}, thông báo tắt trong {{ dismissCountDown }} s</b-alert>
    <div v-if="!authenticated && !checkToken">
      <div v-if="isGuest" style="background-color:white;padding:50px">
        <CompDocuments />
      </div>
      <div v-else>
        <CompLogin v-on:login="login" />
      </div>
    </div>
    <CompLoading v-show="loading || this.$store.getters['user/isLoading']" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CompDocuments from "./components/CompDocuments.vue";
import CompSidebar from "./components/CompSidebar.vue";
import CompBody from "./components/CompBody.vue";
import CompLogin from "./components/CompLogin.vue";
import { EventBus } from "./components/bus/event-bus.js";
import hito_api from "./api/hito.js";
import { mapActions, mapState } from "vuex";
import CompLoading from "./components/CompLoading.vue";
import {firebase} from './firebase'

export default {
  name: "App",
  components: {
    CompBody,
    CompSidebar,
    CompLogin,
    CompDocuments,
    CompLoading,
  },
  mounted() {},
  created() {
    // Listen for the i-got-clicked event and its payload.
    EventBus.$on("i-got-clicked", (clickCount) => {
      console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`);
    });

    EventBus.$on("showMessage", (message) => {
      this.message = message;
      this.showAlert();
    });

    EventBus.$on("deletePostByEB", (post) => {
      //console.log(this.user);
      this.deletePost(post);
    });

    EventBus.$on("createPost", (post) => {
      this.createPost(post, this.token);
    });

    EventBus.$on("setGuest", (isGuest) => {
      this.setGuest(isGuest);
    });

    EventBus.$on("registerUser", (user) => {
      this.registerUser(user);
    });

    EventBus.$on("getListPost", () => {
      console.log('vào....')
      this.loading = true;
      hito_api.getListPosts(localStorage.getItem('apiToken'), (value) => {
        //console.log(value);
        this.list_posts = value.data.list_post;
        this.loading = false;
      });
    });

    EventBus.$on("logout", () => {
      localStorage.clear();
      this.authenticated = false;
      //this.$router.push("/");
      window.location.href = "/";
    });

    var apiToken = localStorage.getItem("apiToken");
    if (apiToken) {
      this.token = apiToken;
      this.getUserLoginAPI(apiToken);
    }
  },
  computed: {
    checkToken() {
      if (localStorage.getItem("apiToken")) {
        return true;
      }
      return false;
    },
    ...mapState({
      store_user: (state) => state.user.user,
    }),
  },

  methods: {
    setGuest(isGuest) {
      this.isGuest = isGuest;
    },
    createPost(post, token) {
      this.loading = true;
      //console.log(post);
      //this.loading = true;
      hito_api.createPost(post, token, (value) => {
        console.log(value)
        //console.log(value.data.data);
        //this.list_posts.push(value.data.data);
        this.loading = false;
      });
    },
    getUserLoginAPI(apiToken) {
      if (apiToken) {
        this.token = apiToken;
        this.loading = true;

        hito_api.getUserLogin(apiToken, (value) => {
          //this.user = value.data.user;
          //console.log("--->"+value.data.user)
          this.getUserLogin(value.data.user);
          this.authenticated = true;
          hito_api.getListPosts(
            apiToken,
            (value) => {
              this.list_posts = value.data.list_post;
              this.loading = false;
            },
            () => {
              this.loading = false;
            }
          );
        });
      }
    },
    registerUser(user) {
      this.loading = true;
      hito_api.register(
        user,
        (value) => {
          this.token = value.data.data.token;
          localStorage.setItem("apiToken", this.token);
          this.getUserLoginAPI(this.token);
          this.loading = false;
          this.$router.push('/home');
          EventBus.$emit("showMessage", "Tạo tài khoản thành công");
        }
      );
    },
    increaseCounter() {
      console.log("Nhận nè");
    },
    logout() {
      firebase.auth.logout()
      this.authenticated = false;
      localStorage.clear();
      this.$router.push("/");
    },
    deletePartner: function (e) {
      var indexPartnerDelete = -1;
      this.user.list_collaborators.forEach((user, index) => {
        if (e === user.id) {
          indexPartnerDelete = index;
        }
      });
      if (indexPartnerDelete != -1) {
        this.user.list_collaborators.splice(indexPartnerDelete, 1);
      }
    },
    updateInfoUser: function (e) {
      console.log(e)
      this.loading = true;
      this.user.name = e.name;
      this.user.birth_day = e.birth_day;
      this.user.birth_place = e.birth_place;
      this.user.department = e.department;
      this.user.phone_number = e.phone_number;
      this.user.email = e.email;
      hito_api.updateUser(this.user, this.token, (value) => {
        console.log(value)
        this.loading = false;
      });
    },
    deletePost: function (e) {
      var indexPostSelected = -1;
      var postId = -1;
      this.loading = true;
      this.list_posts.forEach((post, index) => {
        if (post.id === e.id) {
          postId = post.id;
          indexPostSelected = index;
        }
      });
      if (indexPostSelected != -1) {
        hito_api.deletePost(postId, this.token, () => {
          this.loading = false;
        });

        this.list_posts.splice(indexPostSelected, 1);
      }
    },
    ...mapActions("user", ["getUserLogin"]),
    login(e) {
      var user_login = {};
      user_login.username = e.username;
      user_login.password = e.password;
      this.loading = true;
      //console.log("vào nè" + this.loading + e.username);
      hito_api.login(user_login, (value) => {
        this.token = value.data.token;
        this.authenticated = value.success;
        localStorage.setItem("apiToken", this.token);
        this.user = value.data.user;
        this.getUserLogin(value.data.user);
        hito_api.getListPosts(value.data.token, (value) => {
          //console.log(value);
          this.list_posts = value.data.list_post;
          this.loading = false;
          this.$router.push("home");
        });
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
  data() {
    return {
      posts: [],
      token: "",
      user: {},
      list_posts: [],
      itemActive: 0,
      authenticated: false,
      isGuest: false,
      counter: 0,
      dismissSecs: 5,
      dismissCountDown: 0,
      message: "",
      loading: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
}
#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}
.hiddenButton {
  display: none !important;
}
.showButton {
  display: inline !important;
}
#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.page-header {
  font-weight: 700;
  font-size: 20px;
  padding-top: 20px;
  border: none;
  color: #3ab39b;
}
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: "loading...";
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

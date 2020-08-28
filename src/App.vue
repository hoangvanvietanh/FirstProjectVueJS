<template>
  <div id="app" v-cloak>
    <div v-if="authenticated == true" class="d-flex" id="wrapper">
      <CompSidebar v-bind:itemActive="itemActive" />
      <CompBody
        v-on:deletePartner="deletePartner"
        v-on:updateInfoUser="updateInfoUser"
        v-on:deletePost="deletePost"
        v-bind:user="user"
        v-bind:itemActive="itemActive"
      />
      
    </div>
    <div v-else>
      <CompLogin v-on:login="login" />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CompSidebar from "./components/CompSidebar.vue";
import CompBody from "./components/CompBody.vue";
import CompLogin from "./components/CompLogin.vue";
import { EventBus } from './components/bus/event-bus.js';
import axios from "axios";

export default {
  name: "App",
  components: {
    CompBody,
    CompSidebar,
    CompLogin,
  },
  mounted() {
    
  },
  created() {

// Listen for the i-got-clicked event and its payload.
EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
});
EventBus.$on('deletePortByEB', post => {
  this.deletePost(post);
});

    // var apiToken = localStorage.getItem("apiToken");
    //   if (apiToken) {
    //     this.token = apiToken;
    //   };
    // this.$bus.on('increaseCounter', value => {
    //             this.counter = value
    //         })
  },
  computed: {
    // checkApiToken() {
    //   var apiToken = localStorage.getItem("apiToken");
    //   if (apiToken) {
    //     //this.token = apiToken;
    //     this.authenticated = true;
    //   }
    //   else{
    //     this.authenticated = false;
    //   }
      
    // },
  },
  methods: {
    increaseCounter(){
      console.log("Nhận nè");
    },
    deletePartner: function (e) {
      //console.log("App.vue", e);
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
      console.log("updated", e);
      //this.user.id = e.id;
      //this.user.username = e.username;
      this.user.name = e.name;
      this.user.birth_day = e.birth_day;
      this.user.birth_place = e.birth_place;
      this.user.department = e.department;
      this.user.phone_number = e.phone_number;
      this.user.email = e.email;
    },
    deletePost: function (e) {
      //console.log("app.vue", e);
      var indexPostSelected = -1;
      this.user.list_posts.forEach((post, index) => {
        if (post.id === e.id) {
          indexPostSelected = index;
        }
      });
      if (indexPostSelected != -1) {
        this.user.list_posts.splice(indexPostSelected, 1);
      }
    },
    async login(e) {
     //console.log(e)
      var userData = {};
      var uname = e.username;
      var pass = e.password;
      await axios
        .post(`http://127.0.0.1:8000/api/login?email=${uname}&password=${pass}`)
        .then(async (response) => {
          console.log(response)
          this.token = response.data.data.token;
          localStorage.setItem('apiToken', this.token);
          this.user.name = response.data.data.user.name;
          userData = response.data.data.user;
          this.getDataListPosts(userData);
          this.authenticated = true;
        })
        .catch((e) => {
          console.log("Xác thực lỗi" + e);
        });
    },
    async getDataListPosts(userData) {
      const AuthStr = "Bearer ".concat(this.token);
      //console.log(this.token)
      await axios
        .get("http://127.0.0.1:8000/api/posts", {
          headers: { Accept: "application/json", Authorization: AuthStr },
        })
        .then((response) => {
          this.user.list_posts = response.data.list_post;
          userData.list_posts = response.data.list_post;
          //console.log(userData);
          this.user = userData;
        })
        .catch((error) => {
          console.log("Lấy bài viết lỗi " + error);
        });
    },
  },
  data() {
    return {
      posts: [],
      token: "",
      user: {},
      itemActive: 0,
      authenticated : false,
      counter: 0
    };
  },
};
</script>

<style>
#app {
  font-family: Roboto,sans-serif;
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
</style>

<template>
  <div class="header">
    <!-- Page Content -->
    <div id="page-content-wrapper" style="with:100%">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
        <button
          class="btn btn-primary hiddenButton"
          style="background-color:rgb(57, 179, 154);border:none"
          id="menu-toggle"
        >
          <font-awesome-icon icon="bars" />
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <b-dropdown class="custom-notification">
              <div slot="button-content" class="icon-dropdown">
                <p class="title-notification" v-if="!check" style="color: white; cursor: pointer" v-b-tooltip.hover title="">Không có thông báo</p>
                <p class="title-notification" v-else v-b-tooltip.hover title="Cick to seen" style="color: white; cursor: pointer" @click="seen">Có thông báo</p>
              </div>
              <div class="row" style="width:100%">
                <div class="col-sm-12" v-for="(item, index) in list_posts" :key="index">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </b-dropdown>
            <div class="pull-left">
              <p class="info-user">Xin chào, {{this.$store.getters['user/getUser'].name}}</p>
              <p class="info-user">{{this.$store.getters['user/getUser'].department}}</p>
            </div>
            <li class="nav-item img-profile">
              <img
                style="border-radius:50%"
                v-bind:src="url_user_image"
                width="45px"
                height="45px"
                alt="avatar"
              />
            </li>
            <b-dropdown block class="m-2" no-caret>
              <div slot="button-content" class="icon-dropdown">
                <font-awesome-icon icon="angle-down" />
              </div>
              <div class="row" style="width:100%">
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'green', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'red', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'purple', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'yellow', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'pink', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'orange', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'gray', }" icon="circle-notch" />
                  </a>
                </div>
                <div class="col-sm-3">
                  <a class="btn" href="#">
                    <font-awesome-icon :style="{ color: 'brown', }" icon="circle-notch" />
                  </a>
                </div>
              </div>

              <hr />
              <b-dropdown-item v-on:click="logout" href="#">Logout</b-dropdown-item>
            </b-dropdown>
          </ul>
        </div>
      </nav>

      <div class="container-fluid" style="overflow: auto;height:80vh;background-color:white">
        <transition name="fade" mode="out-in">
        <router-view v-bind:list_posts="list_posts" v-bind:user="user" v-on:deletePost="deletePost" v-on:deletePartner="deletePartner" v-on:updateInfoUser="updateInfoUser" ></router-view>
        </transition>
        <!-- <CompHome v-if="itemActive === 0" />
        <CompManagePost
          v-on:deletePost="deletePost"
          v-bind:user="user"
          v-bind:list_posts="list_posts"
          v-else-if="itemActive === 1"
        />
        <CompManageTeam
          v-on:deletePartner="deletePartner"
          v-bind:user="user"
          v-else-if="itemActive === 2"
        />
        <CompInfoUser
          v-on:updateInfoUser="updateInfoUser"
          v-bind:user="user"
          v-else-if="itemActive === 3"
        /> -->
      </div>
    </div>
    <!-- /#page-content-wrapper -->
    <div v-if="authenticated == true">
      <CompFooter />
    </div>
    
  </div>
</template>
<script>
// import CompHome from "./CompHome.vue";
// import CompManagePost from "./CompManagePost.vue";
// import CompManageTeam from "./CompManageTeam.vue";
// import CompInfoUser from "./CompInfoUser.vue";
import CompFooter from "./CompFooter.vue";
import { EventBus } from "./bus/event-bus.js";
import { mapGetters, mapState } from 'vuex'
import $ from "jquery";
import {db} from '../firebase'

export default {
  name: "CompBody",
  components: {
    // CompHome,
    // CompManagePost,
    // CompManageTeam,
    // CompInfoUser,
    CompFooter,
  },
  mounted() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle").removeClass("showButton");
    });
    $("#btn2").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle").addClass("showButton");
    });
    this.checkData()
  },
  methods: {
    deletePartner: function (e) {
      this.$emit("deletePartner", e);
    },
    updateInfoUser: function (e) {
      this.$emit("updateInfoUser", e);
    },
    deletePost: function (e) {
      this.$emit("deletePost", e);
    },
    logout() {
      EventBus.$emit("logout");
    },
    checkData() {
      var frm = this
      const email = this.$store.getters['user/getUser'].email
      db.collection("users").where("email", "==", email)
          .onSnapshot(function(snapshot) {
            snapshot.docChanges().forEach(function(change) {
              if (change.type === "modified") {
                console.log()
                frm.notifyMe()
                frm.check = true
              }
            })
          });
    },
    seen() {
      this.check = false
      EventBus.$emit("getListPost")
    },
    notifyMe() {
      if (!window.Notification) {
        console.log('Browser does not support notifications.');
      } else {

        new Notification(this.$store.getters['user/getUser'].name + ' ơiiiiiiii!!!!', {
          body: 'Bạn có một thông báo mới',
          icon: 'http://hito.lampart-vn.com/static/imgs/Hito_Logo.jpg',
        });

        // check if permission is already granted
        // if (Notification.permission === 'granted') {
        //   // show notification here
        //   new Notification('Hi, '+this.$store.getters['user/getUser'].name, {
        //     body: 'You have new notification',
        //     icon: 'http://hito.lampart-vn.com/static/imgs/Hito_Logo.jpg',
        //   });
        // }
        // else {
        //   // request permission from user
        //   Notification.requestPermission().then(function (p) {
        //     if (p === 'granted') {
        //       // show notification here
        //       new Notification('Hi, '+this.$store.getters['user/getUser'].name, {
        //         body: 'You have new notification',
        //         icon: 'http://hito.lampart-vn.com/static/imgs/Hito_Logo.jpg',
        //       });
        //     } else {
        //       console.log('User blocked notifications.');
        //     }
        //   }).catch(function (err) {
        //     console.error(err);
        //   });
        // }
      }
    }
  },
  computed: {
    url_user_image() {
      if (this.user.url_image) {
        return this.user.url_image;
      } else {
        return "/gai.jpg";
      }
    },
    ...mapState({
      checkAuthenticated: state => state.user.authenticated
    }),
    ...mapGetters('user', {
      authenticated: 'getUthenticatedStatus',
    })
  },
  
  props: {
    user: Object,
    itemActive: Number,
    list_posts: Array
  },
  data() {
    return {
      check : false
    };
  },
};
</script>
<style>
.custom-notification button {
  font-size: 0px;
}
.custom-notification ul {
  padding: 0px;
}
.custom-notification ul .row{
  margin: 0px;
}
.title-notification {
  font-size: 18px;
}
</style>
<style>

.dropdown-toggle-no-caret {
  background-color: #28353b !important;
  border: none;
}
.img-profile {
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.icon-dropdown {
  color: #3ab39b;
  font-size: 25px;
  border: none;
}
a.icon-dropdown:hover {
  color: rgb(12, 173, 141);
}
.info-user {
  margin-bottom: 0px;
  color: whitesmoke;
}
.pull-left {
  float: left !important;
  padding: 10px;
}
.custom-background-color {
  background: #28353b;
  color: white;
}
.custom-profile-pic {
  border-radius: 50%;
  height: 30px;
}
.header {
  width: 100%;
}
.textColor {
  color: whitesmoke !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
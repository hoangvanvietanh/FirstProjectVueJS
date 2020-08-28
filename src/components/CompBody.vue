<template>
  <div class="header">
    <!-- Page Content -->
    <div id="page-content-wrapper" style="with:100%">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
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
            <div class="pull-left">
              <p class="info-user">Xin chào, {{this.user.name}}</p>
              <p class="info-user">{{this.user.department}}</p>
            </div>
            <li class="nav-item img-profile">
              <img
                style="border-radius:50%"
                v-if="this.user.url_image != ``"
                v-bind:src="this.user.url_image"
                width="45px"
                height="45px"
                alt="avatar"
              />
              <img
                style="border-radius:50%"
                v-else
                src="/gai.jpg"
                width="45px"
                height="45px"
                alt="avatar"
              />
            </li>
            <b-dropdown  no-caret>
              <div  slot="button-content" class="icon-dropdown">
                <font-awesome-icon icon="angle-down" />
              </div >
              <b-dropdown-item href="#">Thông tin cá nhân</b-dropdown-item>
              <hr>
              <b-dropdown-item href="#">Đăng xuất</b-dropdown-item>
            </b-dropdown>
          </ul>
        </div>
      </nav>

      <div class="container-fluid" style="overflow: auto;height:80vh;background-color:white">
        <CompHome v-if="itemActive === 0" />
        <CompManagePost
          v-on:deletePost="deletePost"
          v-bind:user="user"
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
        />
      </div>
    </div>
    <!-- /#page-content-wrapper -->
    <CompFooter />
  </div>
  
</template>
<script>
import CompHome from "./CompHome.vue";
import CompManagePost from "./CompManagePost.vue";
import CompManageTeam from "./CompManageTeam.vue";
import CompInfoUser from "./CompInfoUser.vue";
import CompFooter from "./CompFooter.vue";
import $ from "jquery";

export default {
  name: "CompBody",
  components: {
    CompHome,
    CompManagePost,
    CompManageTeam,
    CompInfoUser,
    CompFooter,
  },
  mounted() {
    $("#menu-toggle").click(function (e) {
      console.log("Bam ne");
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle").removeClass("showButton");
    });
    $("#btn2").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle").addClass("showButton");
    });
  },
  methods: {
    deletePartner: function (e) {
      console.log("CompBody", e);
      this.$emit("deletePartner", e);
    },
    updateInfoUser: function (e) {
      this.$emit("updateInfoUser", e);
    },
    deletePost: function (e) {
      this.$emit("deletePost", e);
    },
  },
  props: {
    user: Object,
    itemActive: Number,
  },
  data() {
    return {};
  },
};
</script>
<style>
.dropdown-toggle-no-caret{
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
</style>
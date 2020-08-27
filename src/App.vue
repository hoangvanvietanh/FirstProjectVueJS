<template>
  <div id="app">
    <div class="d-flex" id="wrapper">
      <CompSidebar v-bind:itemActive="itemActive" />
      <CompBody
        v-on:deletePartner="deletePartner"
        v-on:updateInfoUser="updateInfoUser"
        v-on:deletePost="deletePost"
        v-bind:user="user"
        v-bind:itemActive="itemActive"
      />
      <CompFooter />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CompSidebar from "./components/CompSidebar.vue";
import CompBody from "./components/CompBody.vue";
import CompFooter from "./components/CompFooter.vue";
import $ from "jquery";

export default {
  name: "App",
  components: {
    CompBody,
    CompFooter,
    CompSidebar,
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
  },
  methods: {
    deletePartner: function (e) {
      console.log("App.vue", e);
      var indexPartnerDelete = -1;
      this.user.myPartner.forEach((user, index) => {
        if (e === user.userId) {
          indexPartnerDelete = index;
        }
      });
      if (indexPartnerDelete != -1) {
        this.user.myPartner.splice(indexPartnerDelete, 1);
      }
    },
    updateInfoUser: function (e) {
      console.log("updated", e);
      //this.user.userId = e.userId;
      //this.user.username = e.username;
      this.user.fullName = e.fullName;
      this.user.birthDate = e.birthDate;
      this.user.birthPlace = e.birthPlace;
      this.user.department = e.department;
      this.user.phoneNumber = e.phoneNumber;
      this.user.email = e.email;
    },
    deletePost:function(e){
      console.log("app.vue", e);
      var indexPostSelected = -1;
      this.user.myPost.forEach((post,index)=>{
        if(post.id === e.id){
          indexPostSelected = index;
        }
      })
      if(indexPostSelected != -1){
        this.user.myPost.splice(indexPostSelected, 1);
      }
    }
  },
  data() {
    return {
      
      user: {
        userId: 12,
        username: "hoangvanvietanh",
        fullName: "Hoàng Văn Việt Anh",
        department: "Technical",
        phoneNumber: "0903026389",
        birthDate: "10/7/1998",
        birthPlace: "Hải Dương",
        email: "viet_anh@lampart-vn.com",
        myPartner: [
          {
            userId: 1,
            username: "nguyenvana",
            fullName: "Nguyễn Văn A",
            birthDate: "10/1/1998",
            email: "nguyenvana@lampart-vn.com",
            role: "admin",
          },
          {
            userId: 2,
            username: "nguyenvanb",
            fullName: "Nguyễn Văn B",
            birthDate: "10/2/1998",
            email: "nguyenvanb@lampart-vn.com",
            role: "writer",
          },
          {
            userId: 3,
            username: "nguyenvanc",
            fullName: "Nguyễn Văn C",
            birthDate: "10/3/1998",
            email: "nguyenvanc@lampart-vn.com",
            role: "writer",
          },
          {
            userId: 4,
            username: "nguyenvand",
            fullName: "Nguyễn Văn D",
            birthDate: "10/4/1998",
            email: "nguyenvand@lampart-vn.com",
            role: "reviewer",
          },
          {
            userId: 5,
            username: "nguyenvane",
            fullName: "Nguyễn Văn E",
            birthDate: "10/5/1998",
            email: "nguyenvane@lampart-vn.com",
            role: "writer",
          },
        ],
        statistical: [
          {
            id: 1,
            month: 1,
            year: 2020,
            view: 500,
            post_view: [
              {
                postId: 1,
                view: 250,
              },
              {
                postId: 3,
                view: 150,
              },
              {
                postId: 5,
                view: 100,
              },
            ],
          },
          {
            id: 2,
            month: 2,
            year: 2020,
            view: 800,
            post_view: [
              {
                postId: 1,
                view: 350,
              },
              {
                postId: 6,
                view: 150,
              },
              {
                postId: 8,
                view: 300,
              },
            ],
          },
        ],
        myPost: [
          {
            id: 1,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.",
            url_image: "https://wallpaperset.com/w/full/0/5/6/115775.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 2,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 3,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.3",
            url_image: "https://wallpaperset.com/w/full/0/5/6/115775.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 4,
            title: "VueJS Templates Based On Bootstrap",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.4",
            date_created: "24/8/2020",
          },
          {
            id: 5,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.5",
            url_image: "https://wallpaperset.com/w/full/e/4/c/115808.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 6,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.6",
            url_image: "https://wallpaperset.com/w/full/5/0/4/115812.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 7,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.7",
            url_image: "https://wallpaperset.com/w/full/c/5/9/115815.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 8,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.8",
            url_image: "https://wallpaperset.com/w/full/b/b/9/115819.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 9,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.9",
            url_image: "https://wallpaperset.com/w/full/0/5/8/115827.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 10,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.10",
            url_image: "https://wallpaperset.com/w/full/e/3/4/115828.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 11,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.11",
            url_image: "https://wallpaperset.com/w/full/d/9/f/115895.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 12,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.12",
            url_image: "https://wallpaperset.com/w/full/e/c/d/115850.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 13,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.13",
            url_image: "https://wallpaperset.com/w/full/6/7/f/115846.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 14,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.14",
            url_image: "https://wallpaperset.com/w/full/1/3/7/115905.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 15,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.15",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 16,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.16",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 17,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.17",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 18,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.18",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 19,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.19",
            url_image: "https://wallpaperset.com/w/full/c/0/7/115972.jpg",
            date_created: "24/8/2020",
          },
          {
            id: 20,
            title: "VueJS Templates Based On Bootstrap",
            content:
              "An educational website totally deserves the best treatment since it furnishes learning and development. Tutorio can provide these needs enthusiastically. This Bootstrap social network template will take care of everything from design to integration to maintenance. It even has various tools to help you achieve your overall goals more efficiently. You can choose from its rich collection of pages and components, all responsive and stunning. Meaning, your outcome will appear at the highest quality on mobile, tablet and desktop devices.20",
            url_image: "https://wallpaperset.com/w/full/c/4/9/115984.jpg",
            date_created: "24/8/2020",
          },
        ],
      },
      itemActive: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>

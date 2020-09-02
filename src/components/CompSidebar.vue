<template>
  <div class="CompSidebar textColor">
    <!-- Sidebar -->
    <div class="bg-dark border-right" id="sidebar-wrapper">
      <div id="mySidebar" class="sidebar-heading custom-sidebar-heading back-ground-select">
        <img src="/lampart.jpg" style="border-radius:50%" width="45px" height="45px" alt />
        <br />
        <a style="margin-top:20px;">hito fake</a>
      </div>
      <div class="list-group list-group-flush">
        <a
          id="btn2"
          href="#"
          class="list-group-item-action textColor btn-hide-sidebar"
        >
          <font-awesome-icon icon="chevron-left" />
        </a>

        <router-link id="btn_home"
          to="/home"
          class="list-group-item list-group-item-action textColor"
          v-on:click="setActiveItem(1)"
          v-bind:class="{active: itemActive === 1}"
        >
          <font-awesome-icon icon="home" class="titleButton"/>Trang chủ
        </router-link>

        <router-link id="btn_manage_post"
          to="/manage-post"
          class="list-group-item list-group-item-action textColor"
          v-on:click="setActiveItem(2)"
          v-bind:class="{active: itemActive === 2}"
        >
          <font-awesome-icon icon="table" class="titleButton"/>Quản lý bài viết
        </router-link>
        
        <router-link id="btn_manage_team"
          to="/manage-team"
          class="list-group-item list-group-item-action textColor"
          v-on:click="setActiveItem(3)"
          v-bind:class="{active: itemActive === 3}"
        >
          <font-awesome-icon icon="table" class="titleButton"/>Quản lý thành viên
        </router-link>
        <router-link id="btn_documents"
          to="/documents"
          class="list-group-item list-group-item-action textColor"
          v-on:click="setActiveItem(4)"
          v-bind:class="{active: itemActive === 4}"
        >
          <font-awesome-icon icon="file-word" class="titleButton"/>Tài liệu VueJS
        </router-link>
        <router-link id="btn_info"
          to="/my-info"
          class="list-group-item list-group-item-action textColor"
          v-on:click="setActiveItem(5)"
          v-bind:class="{active: itemActive === 5}"
        >
          <font-awesome-icon icon="address-card" class="titleButton" />Thông tin cá nhân
        </router-link>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->
  </div>
</template>
<script>
export default {
  name: "CompSidebar",
  components: {},
  props: {
    itemActive: Number,
  },
  data() {
    return {
      // menu: [{ text: "Trang chủ", fa_icon: `<font-awesome-icon icon="chevron-left" />` }, { text: "Quản lý",fa_icon: `<font-awesome-icon icon="chevron-left" />` }, {text: "Thông tin cá nhân",fa_icon: `<font-awesome-icon icon="chevron-left" />`}],
    };
  },
  methods: {
    setActiveItem: function (index) {
      this.$parent.itemActive = index;
    },
  },
};
</script>
<style>
.titleButton{
  margin-right: 5px;
}
.background-blue{
  background-color : #4267b2;
}
.background-none{
  background-color : #28353b;
}
.back-ground-select{
background: #39b39a;
}
.custom-sidebar-heading {
  height: 100px;
  text-align: center;
}
.btn-hide-sidebar {
  background-color: #319884;
    text-align: center;
      position: relative;
    display: block;
    padding: 0.15rem 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
}
.bg-dark {
  background-color: #28353b ;
}
.border-right {
  border-right: 0px solid #dee2e6 !important;
}
.textColor {
  color: #9ca6ac !important;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
.list-group-item-action.active {
  z-index: 2;
  color: #fff;
  background-color: rgb(57, 179, 154) ;
  border-color: transparent ;
}
.list-group-item-action.textColor:hover,
.list-group-item-action.textColor:focus {
  background-color: rgb(57, 179, 154) ;
  cursor: pointer;
}
a.btn-hide-sidebar:hover {
  background-color: rgb(12, 173, 141) ;
  cursor: pointer;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
}
</style>
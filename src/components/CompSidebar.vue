<template>
  <div class="CompSidebar textColor">
    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading custom-sidebar-heading">
        <img
          src="http://hito.lampart-vn.com/static/imgs/Hito_Logo.jpg"
          style="border-radius:50%"
          width="45px"
          height="45px"
          alt
        />
        <br />
        <a style="margin-top:20px;">hito fake</a>
      </div>
      <div class="list-group list-group-flush">
        <a id="btn2" href="#" class="list-group-item list-group-item-action textColor btn-hide-sidebar">
          <font-awesome-icon icon="chevron-left" />
        </a>
        <!-- <a
          class="list-group-item list-group-item-action bg-light textColor"
          href="#"
          v-for="(item,index) in menu"
          v-bind:key="index"
          v-on:click="setActiveItem(index)"
          v-bind:class="{active: itemActive === index}" 
        >{{item.text}}</a> -->

        <a class="list-group-item list-group-item-action bg-light textColor" v-on:click="setActiveItem(0)"
          v-bind:class="{active: itemActive === 0}" ><font-awesome-icon icon="home" /> Trang chủ</a>
          <a class="list-group-item list-group-item-action bg-light textColor" v-on:click="setActiveItem(1)"
          v-bind:class="{active: itemActive === 1}" ><font-awesome-icon icon="table" /> Quản lý bài viết</a>
          <a class="list-group-item list-group-item-action bg-light textColor" v-on:click="setActiveItem(2)"
          v-bind:class="{active: itemActive === 2}" ><font-awesome-icon icon="table" /> Quản lý thành viên</a>
          <a class="list-group-item list-group-item-action bg-light textColor" v-on:click="setActiveItem(3)"
          v-bind:class="{active: itemActive === 3}" ><font-awesome-icon icon="address-card" /> Thông tin cá nhân</a>
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
.custom-sidebar-heading{
background:#39b39a;height: 100px;text-align: center;
}
.btn-hide-sidebar {
  background-color: #319884;
  text-align: center;
  padding: 1px;
  margin-bottom: 5px;
}
.active {
  background-color: #319883 !important;
}
.bg-light {
  background-color: #28353b !important;
}
.border-right {
  border-right: 0px solid #dee2e6 !important;
}
.textColor {
  color: #9ca6ac !important;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: rgb(57, 179, 154) !important;
  border-color: rgb(57, 179, 154) !important;
}
a.bg-light:hover,
a.bg-light:focus
 {
  background-color: rgb(57, 179, 154) !important;
  cursor: pointer;
}
a.btn-hide-sidebar:hover{
  background-color: rgb(12, 173, 141) !important;
  cursor: pointer;
}
</style>
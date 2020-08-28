<template>
  <div class="manage-post">
    <div class="row">
      <div class="col-md-3">
        <h1 class="page-header" >Quản lý bài viết</h1>
      </div>
      <div class="col-md-6">
        
      </div>
      <div class="col-md-3">
        <h1 class="page-header" style="float: right">Tổng : {{user.list_posts.length}} bài viết</h1>
      </div>
      
      
    </div>

    <hr />
    <div class="row">
      <CompPost
        v-on:deletePost="deletePost"
        v-for="(post,index) in getPost"
        v-bind:key="index"
        v-bind:post="post"

      />
      
      
    </div>
    <div class="row" style="margin-bottom: 5%;">
      <div class="col-md-5">
        
      </div>
      <div class="col-md-3">
        <CompPagination v-bind:selectedPagination="selectedPagination" v-bind:user="user"/>
      </div>
      <div class="col-md-4">
        
      </div>
    </div>
  </div>
</template>
<script>
import CompPagination from "./CompPagination.vue";
import CompPost from "./CompPost.vue";
export default {
  name: "manage-post",
  components: {
    CompPost,
    CompPagination
  },
  methods: {
    deletePost: function (e) {
      this.$emit("deletePost", e);
    },
  },
  props: {
    user: Object,
  },
  data(){
    return{
      selectedPagination : 1
    }
  },
  computed:{
    getPost:function(){
      
      return this.user.list_posts.filter((post,index)=>index >= ((this.selectedPagination-1)*4) && index < (this.selectedPagination*4));
    }
  }
};
</script>
<style>
</style>
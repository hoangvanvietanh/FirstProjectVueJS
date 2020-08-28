<template>
  <div class="col-md-3" v-on:click="showPost()">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">
            <img src="/gai.jpg" width="100%" class="rounded" alt />
          </div>
          <div class="col-md-8">
            <div class="row">
              <p class="deleteMarginBottom">Hoàng Văn Việt Anh</p>
            </div>
            <div class="row">
              <p class="deleteMarginBottom">
                <small>Ngày 24 tháng 8 năm 2020</small>
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <button v-on:click="deletePost(post)" class="btn btn-danger">X</button>
          </div>
        </div>
        <hr />
        <img :src="post.url_image" class="rounded" width="100%" alt />
        <hr />
        <h3 class="card-title">{{post.title}}</h3>
        <div style="overflow: hidden;text-overflow:ellipsis;height:200px;">
          <p class="card-text" style="text-align: justify;">{{post.content}}</p>
        </div>

        <a name id class="btn btn-success" v-on:click="showPost()" href="#" role="button">Đọc thêm</a>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { EventBus } from './bus/event-bus.js';

export default {
  name: "user",
  props: {
    post: Object,
  },
  data() {
    return {
      clickCount: 0
    };
  },
  methods: {
    showPost() {
      console.log("press button");
      var num  = this.clickCount++;
      EventBus.$emit('i-got-clicked', num);
      this.$store.commit('increment')
      console.log('=>>> from ' + this.$store.state.count);
    },
    deletePost: function (post) {
      //this.$emit("deletePost", post);
      
      EventBus.$emit('deletePortByEB', post);
    },
  },
};
</script>
<style>
.deleteMarginBottom {
  margin-bottom: 0%;
}
.btn-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
}
.btn-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
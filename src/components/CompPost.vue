<template>
  <div class="col-md-3" v-on:click="showPost()">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <img src="/gai.jpg" width="45px" height="45px" class="rounded" alt />
          </div>
          <div class="col-md-7">
            <div class="row">
              <p class="deleteMarginBottom">{{user.name}}</p>
            </div>
            <div class="row">
              <p class="deleteMarginBottom">
                <small>{{convertDataTime}}</small>
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <button v-on:click="deletePost(post)" style="padding:5px 5px" class="btn btn-danger">X</button>
          </div>
        </div>
        <hr />
        <img :src="post.url_image" class="rounded" width="100%" alt />
        <hr />
        <h3 class="card-title">{{post.title}}</h3>
        <div style="overflow: hidden;text-overflow:ellipsis;height:10vh">
          <p class="card-text" style="text-align: justify;">{{post.content}}</p>
        </div>

        <a name id class="btn btn-success" v-on:click="showPost()" href="#" role="button">Đọc thêm</a>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { EventBus } from "./bus/event-bus.js";

export default {
  name: "user",
  props: {
    post: Object,
    user: Object,
  },
  data() {
    return {
      clickCount: 0,
    };
  },
  methods: {
    showPost() {
      // console.log("press button");
      //var num  = this.clickCount++;
      //EventBus.$emit('i-got-clicked', num);
      // this.$store.commit('increment')
      // console.log('=>>> from ' + this.$store.state.count);
    },
    deletePost: function (post) {
      //this.$emit("deletePost", post);

      EventBus.$emit("deletePostByEB", post);
      this.showAlert(`Bài viết "${post.title}" đã được xóa`);
    },
        showAlert(message){
      EventBus.$emit("showMessage",message);
    }
  },
  computed: {
    convertDataTime() {
      var date = new Date(this.post.created_at);
      var dateStr =
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        ("00" + date.getDate()).slice(-2) +
        "/" +
        date.getFullYear() +
        " " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2) +
        ":" +
        ("00" + date.getSeconds()).slice(-2);
      return dateStr;
    },
  },
};
</script>
<style>
.deleteMarginBottom {
  margin-bottom: 0%;
  margin-left: 10px;
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
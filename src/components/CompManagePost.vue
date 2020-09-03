<template>
  <div class="manage-post">
    <div class="row">
      <div class="col-md-3">
        <div class="row">
          <div class="col-sm-8">
            <h1 class="page-header">Quản lý bài viết</h1>
          </div>
          <div class="col-sm-4">
            <a
              name
              id
              style="margin-top:20%"
              @click="$bvModal.show('bv-modal-create-post')"
              class="btn btn-primary"
              href="#"
              role="button"
            >+</a>
          </div>
        </div>
      </div>
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <h1 class="page-header" style="float: right">Tổng : {{numberOfPost}} bài viết</h1>
      </div>
    </div>

    <hr />
    <div class="row">
      <CompPost
        v-on:deletePost="deletePost"
        v-for="(post,index) in getPost"
        v-bind:key="index"
        v-bind:user="user"
        v-bind:post="post"
      />
    </div>
    <div class="row" style="margin-bottom: 5%;">
      <div class="col-md-5"></div>
      <div class="col-md-3">
        <CompPagination
          v-bind:list_posts="list_posts"
          v-bind:selectedPagination="selectedPagination"
          v-bind:user="user"
        />
      </div>
      <div class="col-md-4"></div>
    </div>
    <b-modal id="bv-modal-create-post" hide-footer>
      <template v-slot:modal-title>Create Post</template>
      <div class="d-block text-left">
        <div class="form-group">
          <label for>Title</label>
          <input
            type="text"
            class="form-control"
            v-model="input.title"
            aria-describedby="helpId"
            placeholder
          />
        </div>
        <div class="form-group" v-if="input.url_image">
          <img :src="input.url_image" class="rounded" width="100%" alt />
        </div>
        <div class="form-group">
          <label for>Image URL</label>
          <input
            type="text"
            class="form-control"
            v-model="input.url_image"
            aria-describedby="helpId"
            placeholder
          />
        </div>
        <div class="form-group">
          <label for>Content</label>
          <input
            type="text"
            class="form-control"
            v-model="input.content"
            aria-describedby="helpId"
            placeholder
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <b-button
            class="mt-2 btn-success"
            v-if="validateData == true"
            block
            @click="createPost();$bvModal.hide('bv-modal-create-post')"
          >Submit</b-button>
          <b-button class="mt-2 btn-success" v-else block @click="setData();">Set Data</b-button>
        </div>
        <div class="col-sm-6">
          <b-button
            class="mt-2 btn-danger"
            block
            @click="$bvModal.hide('bv-modal-create-post')"
          >Close</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import CompPagination from "./CompPagination.vue";
import CompPost from "./CompPost.vue";
import { EventBus } from "./bus/event-bus.js";
export default {
  name: "manage-post",
  components: {
    CompPost,
    CompPagination,
  },
  methods: {
    deletePost: function (e) {
      this.$emit("deletePost", e);
    },
    createPost() {
      EventBus.$emit("createPost", this.input);
      this.showAlert(`Thêm bài viết "${this.input.title }" thành công`)
      this.input.title = "";
      (this.input.url_image = ""), (this.input.content = "");
    },
    setData() {
      var countPost = this.list_posts.length;
      countPost++;
      this.input.title = "Bài viết số " + countPost;
      (this.input.url_image =
        "https://wallpaperset.com/w/full/0/c/e/115769.jpg"),
        (this.input.content = "Nội dung bài viết số " + countPost);
    },
    showAlert(message) {
      EventBus.$emit("showMessage", message);
    },
  },
  props: {
    user: Object,
    list_posts: Array,
  },
  data() {
    return {
      selectedPagination: 1,
      input: {
        title: "",
        content: "",
        url_image: "",
        status: "default",
        user_id: this.user.id,
      },
    };
  },
  computed: {
    validateData() {
      if (
        this.input.title != "" &&
        this.input.url_image != "" &&
        this.input.content != ""
      ) {
        return true;
      }
      return false;
    },
    getPost: function () {
      return this.list_posts.filter(
        (post, index) =>
          index >= (this.selectedPagination - 1) * 4 &&
          index < this.selectedPagination * 4
      );
    },
    numberOfPost() {
      if (this.list_posts) {
        return this.list_posts.length;
      }
      return 0;
    },
  },
};
</script>
<style>
</style>
<template>
  <div id="v_once">
    <b-modal size="lg" id="bv-modal-7" hide-footer>
      <template v-slot:modal-title>v-once</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <!-- single element -->
        <span v-once>This will never change: {{msg}}</span>
        <!-- the element have children -->
        <div v-once>
          <h1>comment</h1>
          <p>==> Messenges: {{msg}}</p>
        </div>
        <button type="button" v-on:click="getText" class="btn btn-primary">Get msg text</button>
        <hr>
        <button type="button" v-on:click="changText" class="btn btn-primary">Change msg text</button>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v8/1.JPG" target="_blank">
          <img src="document_image/v8/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v8/2.JPG" target="_blank">
          <img src="document_image/v8/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-7')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v8',
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
  methods: {
    changText: function () {
      this.msg = "Hi Việt Em";
      alert(this.msg);
    },
    getText: function () {
      alert(this.msg);
    },
  },
};
</script>
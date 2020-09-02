<template>
  <div id="v_bind">
    <b-modal size="lg" id="bv-modal-watcher" hide-footer>
      <template v-slot:modal-title>Watcher</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p>
          Look value at console.log:
          <input v-model="title" />
        </p>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/watcher/1.JPG" target="_blank">
          <img src="document_image/watcher/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/watcher/2.JPG" target="_blank">
          <img src="document_image/watcher/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-watcher')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: "watcher",
  data() {
    return {
      title: "",
    };
  },
  watch: {
    title: (newTitle, oldTitle) => {
      console.log("Title changed from " + oldTitle + " to " + newTitle);
    },
  },
};
</script>
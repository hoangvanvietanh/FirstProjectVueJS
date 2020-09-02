<template>
  <div id="v_model">
    <b-modal size="lg" id="bv-modal-2" hide-footer>
      <template v-slot:modal-title>v-model</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p>{{ message }}</p>
        <input v-model="message" />
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v6/1.JPG" target="_blank">
          <img src="document_image/v6/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v6/2.JPG" target="_blank">
          <img src="document_image/v6/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-2')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v6',
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>
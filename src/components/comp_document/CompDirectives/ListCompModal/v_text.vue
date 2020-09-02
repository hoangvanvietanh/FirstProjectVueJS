<template>
  <div id="v_text">
    <b-modal size="lg" id="bv-modal-8" hide-footer>
      <template v-slot:modal-title>v-text</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <span v-text="message"></span>
        <!-- same as -->
        <span>{{message}}</span>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v11/1.JPG" target="_blank">
          <img src="document_image/v11/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v11/2.JPG" target="_blank">
          <img src="document_image/v11/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-8')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v11',
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>
<template>
  <div id="v_show">
    <b-modal size="lg" id="bv-modal-10" hide-footer>
      <template v-slot:modal-title>v-show</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <h1 v-show="result1">Hello 1!</h1>
        <h1 v-show="result2">Hello 2!</h1>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v10/1.JPG" target="_blank">
          <img src="document_image/v10/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v10/2.JPG" target="_blank">
          <img src="document_image/v10/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-10')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v10',
  data() {
    return {
      message: "Hello Vue!",
      result1: true,
      result2: false,
    };
  },
};
</script>
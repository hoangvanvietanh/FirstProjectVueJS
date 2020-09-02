<template>
  <div id="v_pre">
    <b-modal size="lg" id="bv-modal-9" hide-footer>
      <template v-slot:modal-title>v-pre</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <span v-pre>this message will not be compiled:{{ message }}</span>
        <hr>
        <p>Code HTML</p>
        <a href="document_image/v9/1.JPG" target="_blank"><img src="document_image/v9/1.JPG" width="100%"  alt=""></a> 
        <p>Code Javascript</p>
        <a href="document_image/v9/2.JPG" target="_blank"><img src="document_image/v9/2.JPG" width="100%"  alt=""></a> 
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-9')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v9',
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>
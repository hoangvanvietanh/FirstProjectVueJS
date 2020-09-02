<template>
  <div id="v_html">
    <b-modal size="lg" id="bv-modal-6" hide-footer>
      <template v-slot:modal-title>v-html</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <div v-html="html"></div>
        <hr>
        <p>Code HTML</p>
        <a href="document_image/v4/1.JPG" target="_blank"><img src="document_image/v4/1.JPG" width="100%"  alt=""></a> 
        <p>Code Javascript</p>
        <a href="document_image/v4/2.JPG" target="_blank"><img src="document_image/v4/2.JPG" width="100%"  alt=""></a> 
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-6')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v4',
  data() {
    return {
      message: "Hello Vue!",
      html: ` <button type="button" class="btn btn-primary">Button created by v-html</button>`,
    };
  },
};
</script>
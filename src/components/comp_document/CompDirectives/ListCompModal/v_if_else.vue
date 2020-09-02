<template>
  <div id="v_if_else">
    <b-modal size="lg" id="bv-modal-5" hide-footer>
      <template v-slot:modal-title>v-if,else</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v5/1.JPG" target="_blank">
          <img src="document_image/v5/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v5/2.JPG" target="_blank">
          <img src="document_image/v5/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-5')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v5',
  data() {
    return {
      message: "Hello Vue!",
      type: 'B',
    };
  },
};
</script>
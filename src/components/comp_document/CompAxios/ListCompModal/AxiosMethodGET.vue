<template>
  <div id="axiosget">
    <b-modal size="lg" id="bv-modal-axios-get" hide-footer>
      <template v-slot:modal-title>Axios Method GET</template>
      <div class="d-block text-left">
        <!-- <h5>Kết quả demo</h5>
        <p>
          {{user}}
        </p>
        <hr /> -->
        <p>Code</p>
        <a href="document_image/axios/get.PNG" target="_blank">
          <img src="document_image/axios/get.PNG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-axios-get')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>

export default {
  name: "axiosget",
  data() {
    return {

    };
  },
  mounted(){

  },
  methods:{

  }
};
</script>
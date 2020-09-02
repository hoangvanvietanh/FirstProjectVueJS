<template>
  <div id="axiosdelete">
    <b-modal size="lg" id="bv-modal-axios-delete" hide-footer>
      <template v-slot:modal-title>Axios Method DELETE</template>
      <div class="d-block text-left">
        <!-- <h5>Kết quả demo</h5>
        <p>
          {{user}}
        </p>
        <hr /> -->
        <p>Code</p>
        <a href="document_image/axios/delete.PNG" target="_blank">
          <img src="document_image/axios/delete.PNG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-axios-delete')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>

export default {
  name: "axiosdelete",
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
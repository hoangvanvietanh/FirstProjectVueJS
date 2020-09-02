<template>
  <div id="axiosdemo">
    <b-modal size="lg" id="bv-modal-axios-demo" hide-footer>
      <template v-slot:modal-title>Axios Demo</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p>
          {{user}}
        </p>
        <hr />
        <p>Code</p>
        <a href="document_image/axios/1.PNG" target="_blank">
          <img src="document_image/axios/1.PNG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-axios-demo')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import axios_api from '../../../../api/demoaxios.js'

export default {
  name: "axiosdemo",
  data() {
    return {
       user: null,
      loading: true,
      errored: false
    };
  },
  mounted(){
     axios_api.getUser(value=>{
       this.user = value.data.data.user
     })   
  },
  methods:{
    //   getUser(){
    //       console.log(axios_demo.getUser());
    //       return axios_demo.getUser();
    //   }
  }
};
</script>
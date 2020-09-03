<template>
  <div id="axiosdemo">
    <b-modal size="lg" id="bv-modal-axios-demo" hide-footer>
      <template v-slot:modal-title>Axios Demo</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p>
          {{getvalue}}
        </p>
        <div class="form-group">
          <input type="text"
            class="form-control" v-model="propertyUser" aria-describedby="helpId" placeholder="Nhập thuộc tính user muốn hiện">
        </div>
        <a href="data/user.json" target="_blank">View JSON file</a>
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
      errored: false,
      propertyUser:"",
      showValue:""
    };
  },
  mounted(){
     axios_api.getUser(value=>{
       this.user = value.data.data.user
     })   
  },
  computed:{
    getvalue(){
      if(this.propertyUser == "name"){
        return this.user.name;
      }
      else if(this.propertyUser == "gender"){
        return this.user.gender;
      }
      else if(this.propertyUser == "address"){
        return this.user.address;
      }
      else if(this.propertyUser == "email"){
        return this.user.email;
      }
      else if(this.propertyUser == "username"){
        return this.user.username;
      }
      else if(this.propertyUser == "birth_day"){
        return this.user.birth_day;
      }
      else if(this.propertyUser == "birth_place"){
        return this.user.birth_place;
      }
      else if(this.propertyUser == "phone_number"){
        return this.user.phone_number;
      }else if(this.propertyUser == "department"){
        return this.user.department;
      }
      return this.user;
    }
  },
  methods:{
    //   getUser(){
    //       console.log(axios_demo.getUser());
    //       return axios_demo.getUser();
    //   }
  }
};
</script>
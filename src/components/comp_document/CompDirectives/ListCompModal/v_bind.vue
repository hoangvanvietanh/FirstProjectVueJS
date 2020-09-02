<template>
  <div id="v_bind">
    <b-modal size="lg" id="bv-modal-1" hide-footer>
      <template v-slot:modal-title>v-bind</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <input type="text" v-model="message" /> <p>Đ</p>
        <hr>
        <p>Ví dụ: v-bind:class, v-bind:disabled,..</p>
        <button type="button" class="btn btn-primary" v-bind:class="{activeHVP : isButtonDisabled == false}" v-bind:disabled="isButtonDisabled">Hòn Vọng Phu</button>
        <hr>
        <p>ví dụ: v-bind:value, ...</p>
        <div class="form-group">
          <input type="text"
            class="form-control" v-bind:value="message" name="" id="" aria-describedby="helpId" placeholder="">
        </div>
        <hr>
        <p>Code HTML</p>
        <a href="document_image/v1/1.JPG" target="_blank"><img src="document_image/v1/1.JPG" width="100%"  alt=""></a> 
        <p>Code Javascript</p>
        <a href="document_image/v1/2.JPG" target="_blank"><img src="document_image/v1/2.JPG" width="100%"  alt=""></a> 
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-1')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v1',
  data() {
    
    return {
      message: "Hello Vue!",
      isButtonDisabled: true
    };
  },
  methods:{
      changeStatusButton(){
           this.isButtonDisabled = false;
      }
  }
};
</script>
<style>
.activeHVP{
    background-color: green !important;
}
</style>
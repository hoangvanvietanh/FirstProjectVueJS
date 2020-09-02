<template>
  <div id="v_bind">
    <b-modal size="lg" id="bv-modal-computed" hide-footer>
      <template v-slot:modal-title>Computed Properties</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <div class="form-group">
          <label for="">Change message</label>
          <input type="text"
            class="form-control" name="" v-model="message" id="" aria-describedby="helpId" placeholder="">
        </div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <hr>
        <button type="button" v-on:click="changeMessage()" class="btn btn-primary">Change message by methods</button>
        <hr>
        <p>Code HTML</p>
        <a href="document_image/computed/1.JPG" target="_blank"><img src="document_image/computed/1.JPG" width="100%"  alt=""></a> 
        <p>Code Javascript</p>
        <a href="document_image/computed/2.JPG" target="_blank"><img src="document_image/computed/2.JPG" width="100%"  alt=""></a> 
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-computed')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  methods:{
      changeMessage(){
          this.message = "message nè";//Vuejs khuyến khích không nên gán giá trị kiểu này
      }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
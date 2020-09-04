<template>
  <div id="ModalMixinLocal">
    <b-modal size="lg" id="bv-modal-mixin-local" hide-footer>
      <template v-slot:modal-title>Mixin Demo</template>
      <div class="d-block text-left">
        <h5>Mixin là gì ?</h5>
        <p><strong>Mixin </strong> là cách đơn giản nhất để tăng tính <strong> reusable code giữa các component khác nhau </strong> với nhau.</p>
        <p><strong>Mixin có chứa đầy đủ </strong> tính chất của một component bình thường như <strong> các hàm lifecycle created, mounted, update, destroyed, state, methods. </strong> Khi inject mixin vào component, những hàm lifecycle không bị đè lên nhau mà còn được mix và phân luồng chạy một cách rõ ràng.</p>
        <hr>
        <h5>Kết quả demo</h5>
        <p>
          {{greeting}}
        </p>
        <hr />
        <p>{{this.greet()}}</p>
        <p><strong>1. Create Mixin</strong></p>
        <a href="document_image/mixins/1.JPG" target="_blank">
          <img src="document_image/mixins/1.JPG" width="100%" alt />
        </a>
        <p><strong>2. Add Mixin</strong></p>
        <a href="document_image/mixins/2.JPG" target="_blank">
          <img src="document_image/mixins/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-mixin-local')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>

import mixin from '../LocalMixin/LocalMixin.vue'
export default {
    name:"ModalMixinLocal",

    mixins: [mixin],
    
    created(){
        console.log('Created')
        this.greet()
    }
}
</script>
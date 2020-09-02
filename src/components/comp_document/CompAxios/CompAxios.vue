<template>
  <div id="CompAxios">
    <h4 class="sub-header">Axios</h4>
    <div class="row">
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-axios-demo')"
          href="#"
        >Demo Axios</a>
      </div>
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-axios-get')"
          href="#"
        >Axios Method GET</a>
      </div>
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-axios-post')"
          href="#"
        >Axios Method POST</a>
      </div>
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-axios-put')"
          href="#"
        >Axios Method PUT</a>
      </div><div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-axios-delete')"
          href="#"
        >Axios Method DELETE</a>
      </div>
    </div>
    <hr />
    <CompAxiosMethod />
    <CompAxiosMethodGET />
    <CompAxiosMethodPOST />
    <CompAxiosMethodPUT />
    <CompAxiosMethodDELETE />
  </div>
</template>
<script>
import CompAxiosMethod from './ListCompModal/AxiosMethod.vue';
import CompAxiosMethodGET from './ListCompModal/AxiosMethodGET.vue';
import CompAxiosMethodDELETE from './ListCompModal/AxiosMethodDELETE.vue';
import CompAxiosMethodPUT from './ListCompModal/AxiosMethodPUT.vue';
import CompAxiosMethodPOST from './ListCompModal/AxiosMethodPOST.vue';

export default {
    name:"CompAxios",
    components:{
        CompAxiosMethod,
        CompAxiosMethodGET,
        CompAxiosMethodPOST,
        CompAxiosMethodPUT,
        CompAxiosMethodDELETE
    }
};
</script>
<style>
</style>
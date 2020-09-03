<template>
  <div id="CompSildePart2">
    <b-modal size="xl" id="bv-modal-slide-part2" hide-footer>
      <template v-slot:modal-title>VueJS Part II</template>
      <div class="d-block text-left">
        <b-carousel controls indicators img-width="100%" :interval="100000">
          <b-carousel-slide img-src="document_image/slide_part_2/Slide_1.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_2/Slide_2.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_2/Slide_3.jpeg" ></b-carousel-slide>
        </b-carousel>
      </div>
      
      <div class="row">
        <div class="col-sm-2">
          <a  style="width:100%" class="btn mt-2  btn-dark" href="diagram/webservice.html" role="button" target="_blank">WebService</a>
        </div>
        <div class="col-sm-2">
          <a  style="width:100%" class="btn mt-2  btn-primary" href="diagram/restfull.html" role="button" target="_blank">RESTfull</a>
        </div>
        <div class="col-sm-2"><b-button
            class="mt-2 btn-success"
            block
            @click="$bvModal.show('bv-modal-axios-pre')"
          >Axios</b-button></div>
        <div class="col-sm-2">
          <a  style="width:100%" class="btn  mt-2 btn-info" href="diagram/lifecycle.html" role="button" target="_blank">Life Cycle</a>
        </div>
        <div class="col-sm-2"><a  style="width:100%" class="btn mt-2  btn-warning" href="diagram/globalevent.html" role="button" target="_blank">Global Event Bus</a></div>
        <div class="col-sm-2">
          <b-button
            class="mt-2 btn-secondary"
            block
            @click="$bvModal.show('bv-modal-slide-vuex')"
          >Vuex</b-button>
        </div>
        <div class="col-sm-12">
           
          <b-button
            class="mt-2 btn-danger"
            block
            @click="$bvModal.hide('bv-modal-slide-part2')"
          >Close</b-button>
        </div>
      </div>
    </b-modal>
    <axios />
    <vuex />
  </div>
</template>
<script>
import axios from './axios/CompSildeAxios.vue'
import vuex from './/vuex/CompSlideVuex.vue'
export default {
  name: "CompSildePart2",
  components:{
    axios,
    vuex
  }
};
</script>
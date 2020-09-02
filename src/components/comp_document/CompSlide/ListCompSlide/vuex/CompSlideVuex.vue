<template>
  <div id="CompSildevuex">
    <b-modal size="xl" id="bv-modal-slide-vuex" hide-footer>
      <template v-slot:modal-title>VueX</template>
      <div class="d-block text-left">
        <b-carousel controls indicators img-width="100%" :interval="100000">
          <b-carousel-slide caption="Components" img-src="document_image/vuex/1.png"></b-carousel-slide>
          <b-carousel-slide caption="How components work" img-src="document_image/vuex/2.png" ></b-carousel-slide>
          <b-carousel-slide caption="How vuex work" img-src="document_image/vuex/3.png" ></b-carousel-slide>
          <b-carousel-slide caption="" img-src="document_image/vuex/4.png" ></b-carousel-slide>
          <b-carousel-slide caption="" img-src="document_image/vuex/5.png" ></b-carousel-slide>
          <b-carousel-slide caption="" img-src="document_image/vuex/6.png" ></b-carousel-slide>
          <b-carousel-slide caption="" img-src="document_image/vuex/7.gif" ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-2">
          <a class="btn btn-primary mt-2" href="diagram/vuex.html" role="button" target="_blank">Vuex In My Demo</a>
        </div>
        <div class="col-sm-2">
          <b-button
            class="mt-2 btn-danger"
            block
            @click="$bvModal.hide('bv-modal-slide-vuex')"
          >Close</b-button>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "CompSildevuex",
};
</script>
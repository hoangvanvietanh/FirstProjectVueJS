<template>
  <div id="CompSildePart1">
    <b-modal size="xl" id="bv-modal-slide-part1" hide-footer>
      <template v-slot:modal-title>VueJS Part I</template>
      <div class="d-block text-left">
        <b-carousel controls indicators img-width="100%" :interval="100000">
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_1.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_2.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_3.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_4.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_5.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_6.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_7.jpeg" ></b-carousel-slide>
          <b-carousel-slide img-src="document_image/slide_part_1/Slide_8.jpeg" ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button
            class="mt-2 btn-danger"
            block
            @click="$bvModal.hide('bv-modal-slide-part1')"
          >Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "CompSildePart1",
};
</script>
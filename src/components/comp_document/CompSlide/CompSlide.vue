<template>
  <div id="CompSlide">
    <h4 class="sub-header">Slide</h4>
    <div class="row">
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-slide-part1')"
          href="#"
        >VueJS Part I</a>
      </div>
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-slide-part2')"
          href="#"
        >VueJS Part II</a>
      </div>
    </div>
<hr />
    <CompSlidePart1 />
    <CompSlidePart2 />

  </div>
</template>
<script>
import CompSlidePart1 from './ListCompSlide/CompSildePart1.vue';
import CompSlidePart2 from './ListCompSlide/CompSlidePart2.vue'

export default {
    name:"CompSlide",
    components:{
        CompSlidePart1,
        CompSlidePart2
    }
};
</script>
<style>
</style>
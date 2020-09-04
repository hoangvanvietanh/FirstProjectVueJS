<template>
  <div id="CompMixin">
    <h4 class="sub-header">Mixin</h4>
    <div class="row">
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-mixin-local')"
          href="#"
        >Demo Mixin</a>
      </div>
    </div>
    <CompModalMixin />
  </div>
</template>
<script>
import CompModalMixin from "./CompModalMixin/ModalLocalMixin.vue";
export default {
  name: "CompMixin",
  components:{
      CompModalMixin,
  }
};
</script>
<style>
</style>
<template>
  <div id="axios-pre">
    <b-modal size="xl" id="bv-modal-axios-pre" hide-footer>
      <template v-slot:modal-title>Axios</template>
      <div class="d-block text-left">
        <iframe src="https://prezi.com/view/cWj2lAKITLmDprdufwAb/embed/" id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="500px"  width="100%"></iframe></div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-axios-pre')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "axios-pre",
  data() {
    return {
    };
  },

};
</script>
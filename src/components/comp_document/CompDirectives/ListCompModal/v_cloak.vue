<template>
  <div id="v_cloak">
    <b-modal size="lg" id="bv-modal-11" hide-footer>
      <template v-slot:modal-title>v-cloak</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p v-cloak>{{ message}}</p>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v2/1.JPG" target="_blank">
          <img src="document_image/v2/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v2/2.JPG" target="_blank">
          <img src="document_image/v2/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-11')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v2',
  data() {
    return {
      message: "Hello Vue!"
    };
  },
  mounted() {
      //this.sleep(3000);
    },
  methods: {
    sleep(time) {
      var d1 = new Date().getTime();
      var d2 = new Date().getTime();
      while (d2 < d1 + time) {
        d2 = new Date().getTime();
      }
      return;
    },
  },
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>
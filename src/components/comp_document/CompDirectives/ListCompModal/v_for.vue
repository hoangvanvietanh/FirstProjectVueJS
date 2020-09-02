<template>
  <div id="v_for">
    <b-modal size="lg" id="bv-modal-4" hide-footer>
      <template v-slot:modal-title>v-for</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <ol>
          <li v-for="(todo,index) in todos" v-bind:key="index">{{ todo.text }}</li>
        </ol>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v3/1.JPG" target="_blank">
          <img src="document_image/v3/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v3/2.JPG" target="_blank">
          <img src="document_image/v3/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-4')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v3',
  data() {
    return {
      message: "Hello Vue!",
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};
</script>
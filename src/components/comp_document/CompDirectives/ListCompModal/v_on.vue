<template>
  <div id="v_on">
    <b-modal size="lg" id="bv-modal-3" hide-footer>
      <template v-slot:modal-title>v-on</template>
      <div class="d-block text-left">
        <h5>Kết quả demo</h5>
        <p>{{ message }}</p>
        <div class="row">
          <div class="col-md-6">
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              v-on:click="reverseMessage"
            >v-on:click="reverseMessage"</button>
            <!-- method handler -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              v-on:click="doThis"
            >v-on:click="doThis"</button>

            <!-- shorthand -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              @click="doThis"
            >@click="doThis"</button>

            <!-- stop propagation -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              @click.stop="doThis"
            >@click.stop="doThis"</button>
            <!-- key modifier using keyAlias -->
            <div class="form-group">
              <label for>@keyup.enter="onEnter"</label>
              <input
                type="text"
                class="form-control"
                @keyup.enter="onEnter"
                aria-describedby="helpId"
                placeholder
              />
            </div>
          </div>
          <div class="col-md-6">
            <!-- prevent default -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              @click.prevent="doThis"
            >@click.prevent="doThis"</button>

            <!-- chain modifiers -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="doThis"
            >@click.stop.prevent="doThis"</button>
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              v-on:click.once="doThis"
            >v-on:click.once="doThis"</button>

            <!-- object syntax (2.4.0+) -->
            <button
              style="width: 100%;margin-bottom:2%"
              type="button"
              class="btn btn-primary"
              v-on="{ mousedown: doThis, mouseup: doThat }"
            >v-on="{ mousedown: doThis, mouseup: doThat }</button>
            <!-- key modifier using keyCode -->
            <div class="form-group">
              <label for>@keyup.13="onEnter"</label>
              <input
                type="text"
                class="form-control"
                @keyup.13="onEnter"
                aria-describedby="helpId"
                placeholder
              />
            </div>
          </div>
        </div>
        <hr />
        <p>Code HTML</p>
        <a href="document_image/v7/1.JPG" target="_blank">
          <img src="document_image/v7/1.JPG" width="100%" alt />
        </a>
        <p>Code Javascript</p>
        <a href="document_image/v7/2.JPG" target="_blank">
          <img src="document_image/v7/2.JPG" width="100%" alt />
        </a>
      </div>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-3')">Close</b-button>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name:'v7',
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    doThis: function () {
      alert("Do this ^^");
    },
    doThat: function () {
      alert("Do that ^^");
    },
    onEnter: function () {
      alert("Enter Press ^^");
    },
  },
};
</script>

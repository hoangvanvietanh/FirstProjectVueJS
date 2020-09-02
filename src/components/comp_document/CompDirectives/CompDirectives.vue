<template>
  <div id="CompDirective">
    <h4 class="sub-header">Directives</h4>
    
    <div class="row">
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-1')"
          href="#"
        >v-bind</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-2')"
          href="#"
        >v-model</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-3')"
          href="#"
        >v-on</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-4')"
          href="#"
        >v-for</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-5')"
          href="#"
        >v-if,else</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-6')"
          href="#"
        >v-html</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-7')"
          href="#"
        >v-once</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-8')"
          href="#"
        >v-text</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-9')"
          href="#"
        >v-pre</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-10')"
          href="#"
        >v-show</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-11')"
          href="#"
        >v-cloak</a>
      </div>
    </div>
    <hr />
    <v_cloak/>
    <v_bind/>
    <v_model/>
    <v_on/>
    <v_for/>
    <v_if_else/>
    <v_html/>
    <v_once/>
    <v_text/>
    <v_pre/>
    <v_show/>
  </div>
</template>
<script src="./js/CompDirectives"></script>
<style src="./css/CompDirectives.css"></style>
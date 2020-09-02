<template>
  <div id="CompComputedAndWatcher">
    <h4 class="sub-header">ComputedAndWatcher</h4>
    <div class="row">
      <div class="col-sm-2">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-computed')"
          href="#"
        >Computed Properties</a>
      </div>
      <div class="col-sm-1">
        <a
          style="color: #4caf50 !important;text-alight:center"
          id="show-btn"
          @click="$bvModal.show('bv-modal-watcher')"
          href="#"
        >Watcher</a>
      </div>
    </div>
    <hr />
    <Computed/>
    <Watcher/>
  </div>
</template>
<script src="./js/CompComputedAndWatcher.js"></script>
<style src="./css/CompComputedAndWatcher.css"></style>
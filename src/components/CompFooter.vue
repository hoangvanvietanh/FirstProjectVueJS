<template>
  <div class="footer">
    <div class="fixed-bottom custom-background-color titleCenter footer">© 2020 Lampart Co.Ltd</div>
  </div>
</template>
<script>
export default {
  name: "CompFooter",
};
</script>
<style>
.custom-background-color {
  background: #28353b;
  color: #9ca6ac !important;
}
.titleCenter {
  text-align: center;
}
.footer {
  height: 60px !important;
  padding: 10px;
  font-size: 15px;
}
</style>
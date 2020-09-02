<template>
  <div class="CompHome">
    <h1 class="page-header">Trang chủ</h1>
    <hr />
    <div class="row">
      <div class="col-md-6 chart-header">
        <h4>Thống kê lượt view theo tháng</h4>
        <CompBarChart />
      </div>
      <div class="col-md-6 chart-header">
        <h4>Thống kê lượt view theo bài viết</h4>
        <CompPieChart />
      </div>
    </div>
    <button
      type="button"
      v-on:click="changeStatusAuthenticated(false)"
      class="btn btn-primary"
    >Hide Footer</button>
  </div>
</template>
<script>
import CompBarChart from "./CompBarChart.vue";
import CompPieChart from "./CompPieChart.vue";
import { mapActions } from "vuex";
export default {
  name: "CompHome",
  components: {
    CompBarChart,
    CompPieChart,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("user", ["changeStatusAuthenticated"])
  },
};
</script>
<style>
.chart-header {
  text-align: center;
}
</style>
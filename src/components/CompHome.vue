<template>
  <div class="CompHome">
    <h1 class="page-header">Trang chủ</h1>
    <hr />
    <div class="row">
      <div class="col-md-6 chart-header">
        <h4>Thống kê lượt view theo tháng</h4>
        <CompBarChart />
      </div>
      <div class="col-md-6 chart-header ">
<!--        <h4>Thống kê lượt view theo bài viết</h4>-->
<!--        <CompPieChart />-->
        <h4>Demo Notification</h4>

        <div class="text-left">
          <label>Chọn email</label>
          <b-form-select v-model="selectedEmail" :options="listEmail"></b-form-select>

          <hr>
          <b-button @click="sendNotification">Gửi thông báo</b-button>
        </div>

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
//import CompPieChart from "./CompPieChart.vue";
import { mapActions } from "vuex";
import { db } from '../firebase'

export default {
  name: "CompHome",
  components: {
    CompBarChart,
    //CompPieChart,
  },
  data() {
    return {
      listEmail : [],
      selectedEmail: '',
      contentMessage: ''
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions("user", ["changeStatusAuthenticated"]),
    sendNotification() {
      db.collection("users").doc(this.selectedEmail).update({
        notification : Math.random()
      })
    },
    getData() {
      const frm = this
      db.collection("users").get().then(function(querySnapshot) {
        frm.listEmail = []
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          frm.listEmail.push({
            value: doc.id,
            text: doc.id
          })
        });
      });
    }

  },
};
</script>
<style>
.chart-header {
  text-align: center;
}
</style>
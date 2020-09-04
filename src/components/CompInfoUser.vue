<template>
  <div class="CompSlotDashboard">
    <h1 class="page-header">Thông tin cá nhân</h1>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="form-group">
            <label for>ID</label>
            <input
              type="text"
              class="form-control"
              v-model="input.id"
              aria-describedby="helpId"
              placeholder
              readonly
            />
          </div>
          <div class="form-group">
            <label for>Họ tên</label>
            <input
              type="text"
              class="form-control"
              v-model="input.name"
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Nơi sinh</label>
            <input
              type="text"
              class="form-control"
              v-model="input.birth_place"
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              v-model="input.phone_number"
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for>Tên tài khoản</label>
            <input
              type="text"
              class="form-control"
              v-model="input.username"
              aria-describedby="helpId"
              placeholder
              readonly
            />
          </div>
          <div class="form-group">
            <label for>Ngày sinh</label>
            <input
              type="date"
              forma
              class="form-control"
              v-model="input.birth_day"
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Phòng ban</label>
            <input
              type="text"
              class="form-control"
              v-model="input.department"
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Email</label>
            <input
              type="text"
              class="form-control"
              :value="input.email"
              aria-describedby="helpId"
              placeholder
              readonly
            />
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <b-button
            type="button"
            style="width:100%"
            v-on:click="updateUserInfo(input);showAlert('Cập nhật tài khoản thành công')"
            class="btn btn-success"
          >Đồng ý</b-button>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { EventBus } from "./bus/event-bus.js";
export default {
  name: "CompSlotDashboard",
  components: {},
  data() {
    return {
      date: "",
      input: {
        id: "",
        username: "",
        name: "",
        birth_day: "",
        birth_place: "",
        department: "",
        phone_number: "",
        email: "",
      },
    };
  },
  props: {
    user: Object,
  },
  mounted() {
    // this.id= this.user.id,
    // this.username= this.user.username,
    // this.name= this.user.name,
    // this.birth_day= this.user.birth_day,
    // this.birth_place= this.user.birth_place,
    // this.department= this.user.department,
    // this.phone_number= this.user.phone_number,
    // this.email= this.user.email,

    (this.input.id = this.$store.getters["user/getUser"].id),
      (this.input.username = this.$store.getters["user/getUser"].username),
      (this.input.name = this.$store.getters["user/getUser"].name),
      (this.input.birth_day = this.$store.getters["user/getUser"].birth_day),
      (this.input.birth_place = this.$store.getters[
        "user/getUser"
      ].birth_place),
      (this.input.department = this.$store.getters["user/getUser"].department),
      (this.input.phone_number = this.$store.getters[
        "user/getUser"
      ].phone_number),
      (this.input.email = this.$store.getters["user/getUser"].email);
  },
  methods: {
    ...mapActions("user", ["updateUserInfo"]),
    updateInfoUser: function (userUpdate) {
      console.log(userUpdate);
      //this.$emit('updateInfoUser', userUpdate);
    },
    showAlert(message){
      EventBus.$emit("showMessage",message);
    }
  },
  computed: {},
};
</script>
<style>
</style>
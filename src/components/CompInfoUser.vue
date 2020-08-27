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
              v-model="input.userId"
              name
              id
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
              v-model="input.fullName"
              name
              id
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Nơi sinh</label>
            <input
              type="text"
              class="form-control"
              v-model="input.birthPlace"
              name
              id
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              v-model="input.phoneNumber"
              name
              id
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
              name
              id
              aria-describedby="helpId"
              placeholder
              readonly
            />
          </div>
          <div class="form-group">
            <label for>Ngày sinh</label>
            <input
              type="text"
              class="form-control"
              v-model="input.birthDate"
              name
              id
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
              name
              id
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group">
            <label for>Email</label>
            <input
              type="text"
              class="form-control"
              v-model="input.email"
              name
              id
              aria-describedby="helpId"
              placeholder
            />
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <button type="button" style="width:100%" v-on:click="updateInfoUser(input)" class="btn btn-success">Đồng ý</button>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompSlotDashboard",
  data() {
    return {
      input: {
        userId: this.user.userId,
        username: this.user.username,
        fullName: this.user.fullName,
        birthDate: this.user.birthDate,
        birthPlace: this.user.birthPlace,
        department: this.user.department,
        phoneNumber: this.user.phoneNumber,
        email: this.user.email,
      },
    };
  },
  props: {
    user: Object,
  },
  methods:{
      updateInfoUser:function(userUpdate){
        console.log(userUpdate)
      this.$emit('updateInfoUser', userUpdate);
    }
  },
  computed:{
    
  }
};
</script>
<style>
</style>
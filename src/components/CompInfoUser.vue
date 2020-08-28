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
              type="text"
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
              v-model="input.email"
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
        id: this.user.id,
        username: this.user.username,
        name: this.user.name,
        birth_day: this.user.birth_day,
        birth_place: this.user.birth_place,
        department: this.user.department,
        phone_number: this.user.phone_number,
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
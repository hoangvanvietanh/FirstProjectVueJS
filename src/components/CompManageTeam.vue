<template>
  <div class="manage-team">
    <h1 class="page-header">Quản lý thành viên</h1>
    <hr />
    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>ID</th>
          <th>Tài khoản</th>
          <th>Họ tên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Nhiệm vụ</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in user.myPartner" v-bind:key="index">
          <td scope="row">{{user.userId}}</td>
          <td>{{user.username}}</td>
          <td>{{user.fullName}}</td>
          <td>{{user.birthDate}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td><button type="button" v-on:click="deletePartner(user.userId)" class="btn btn-danger">x</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "manage-team",
  props:{
    user: Object
  },
  methods:{
    deletePartner:function(userId){
      console.log(userId);
        this.$emit('deletePartner', userId);
    }
  }
};
</script>
<style>
</style>
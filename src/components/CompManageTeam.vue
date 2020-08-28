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
        <tr v-for="(user, index) in user.list_collaborators" v-bind:key="index">
          <td scope="row">{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.name}}</td>
          <td>{{user.birth_day}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role}}</td>
          <td><button type="button" v-on:click="deletePartner(user.id)" class="btn btn-danger">x</button></td>
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
    deletePartner:function(id){
      console.log(id);
        this.$emit('deletePartner', id);
    }
  }
};
</script>
<style>
</style>
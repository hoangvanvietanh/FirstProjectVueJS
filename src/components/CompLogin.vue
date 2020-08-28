<template>
  <div class="login">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="row" style="padding:20px">
          <div class="col-md-12 box-login">
            <div class="card" style="
    border: darkorange;border-radius:5px">
              <div class="card-body" style="padding:0px">
                <div class="title-login">
                  <h1>Login</h1>
                </div>
                <br />
                <div class="form-login">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-2"></div>
                      <div class="col-sm-8">
                        <p style="font-size: 14px;
    color: #4caf50;">Sign in with your account</p>
                        <div class="row">
                          <div class="col-1 addon">
                            <span>
                              <font-awesome-icon icon="user-tie" />
                            </span>
                          </div>
                          <div class="col-11 custom-col">
                            <input
                              type="text"
                              class="form-control custom-input"
                              v-model="input.username"
                              v-focus
                              name="username"
                              id="username"
                              aria-describedby="helpId"
                              placeholder="Username"
                            />
                          </div>
                          <div class="col-1 addon">
                            <span>
                              <font-awesome-icon icon="key" />
                            </span>
                          </div>
                          <div class="col-11 custom-col">
                            <input
                              type="password"
                              class="form-control custom-input"
                              v-model="input.password"
                              name = "password"
                              id="password"
                              aria-describedby="helpId"
                              placeholder="Password"
                            />
                          </div>
                          <div class="col-sm-2"></div>
                          <div class="col-sm-8" style="margin-top:16px">
                            <button type="button" style="width:100%" v-on:click="login()" class="btn btn-login">Login</button>
                            <div class="text-forgot-password">
                              <a style="color: #4caf50 !important;" href="#">Forgot password?</a>
                            </div>
                          </div>
                          <div class="col-sm-2"></div>
                        </div>
                      </div>
                      <div class="col-sm-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  props: {},
  methods: {
    login() {
      this.$emit("login", this.input);
    },
  },
};
</script>
<style>
.login {
  width: 100%;
  height: 100vh;
  background-color: #28353b;
}
.box-login {
  margin-top: 20vh;
}
.form-login {
  padding: 15px;
}
.addon {
  text-align: center;
  margin: auto;
}
.title-login {
  text-align: center;
  background-color: #4caf50;
  text-align: center;
  padding: 5px 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-size: 36px;
  line-height: 1.1;
  color: #fff;
}
.custom-col {
  margin-bottom: 1%;
}
.custom-input {
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
}
.btn-login {
  background-color: #039e2a;
  color: white;
  border-color: #067522;
  font-size: 14px;
  cursor: pointer;
  height: 33px;
}
.text-forgot-password {
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
}
</style>
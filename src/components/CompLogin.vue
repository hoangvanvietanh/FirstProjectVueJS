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
                              name="password"
                              id="password"
                              aria-describedby="helpId"
                              placeholder="Password"
                            />
                          </div>
                          <div class="col-sm-2"></div>
                          <div class="col-sm-8" style="margin-top:16px">
                            <button
                              type="button"
                              style="width:100%"
                              v-on:click="login()"
                              class="btn btn-login"
                            >Login</button>
                            <div class="text-forgot-password">
                              <a style="color: #4caf50 !important;" href="#">Forgot password?</a>
                              <br />
                              <a
                                style="color: #4caf50 !important;text-alight:center"
                                id="show-btn"
                                @click="$bvModal.show('bv-modal-example')"
                                href="#"
                              >Create Account</a>
                              <br />
                              <a
                                style="color: red !important;"
                                v-on:click="isGuest()"
                                href="#"
                              >Just view documents VueJS</a>
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
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>Register Account</template>
      <div class="d-block text-left">
        <div class="form-group">
          <label for>Full Name</label>
          <input
            type="text"
            :class="{'form-control isError': !validateName, 'form-control' : validateName}"
            v-model="userRegister.name"
            aria-describedby="helpId"
            placeholder="Nhập họ tên"
          />
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="userRegister.name.length == 0"
          >Vui lòng nhập họ tên</small>
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="userRegister.name.length <= 5 && userRegister.name.length > 0"
          >Họ tên phải nhiều hơn 5 kí tự</small>
          <small
            id="helpId"
            class="form-text"
            style="color: green"
            v-if="userRegister.name.length > 5"
          >Họ tên hợp lệ</small>
        </div>
        <div class="form-group">
          <label for>Username</label>
          <input
            type="text"
            :class="{'form-control isError': !validateUsername, 'form-control' : validateUsername}"
            v-model="userRegister.username"
            aria-describedby="helpId"
            placeholder="Nhập tài khoản đăng nhập"
          />
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="userRegister.username.length == 0"
          >Vui lòng nhập tài khoản đăng nhập</small>
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-else-if="userRegister.username.length <= 5 && userRegister.username.length > 0"
          >Họ tên phải nhiều hơn 5 kí tự</small>
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-else-if="!/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/.test(userRegister.username)"
          >Tài khoản không được có khoảng trắng</small>
          <small id="helpId" class="form-text" style="color: green" v-else>Họ tên hợp lệ</small>
        </div>
        <div class="form-group">
          <label for>Email</label>
          <input
            type="text"
            :class="{'form-control isError': !validateEmail, 'form-control' : validateEmail}"
            v-model="userRegister.email"
            aria-describedby="helpId"
            placeholder="Nhập email"
          />
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="userRegister.email.length == 0"
          >Vui lòng nhập email</small>
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-else-if="!validateEmail"
          >Email không hợp lệ</small>
          <small id="helpId" class="form-text" style="color: green" v-else>Email hợp lệ</small>
        </div>
        <div class="form-group">
          <label for>Password</label>
          <input
            type="password"
            :class="{'form-control isError': !validatePassword, 'form-control' : validatePassword}"
            v-model="userRegister.password"
            aria-describedby="helpId"
            placeholder="Nhập mật khẩu"
          />
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="userRegister.password.length == 0"
          >Vui lòng nhập mật khẩu</small>
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-else-if="userRegister.password.length <= 5"
          >Mật khẩu phải dài hơn 5 kí tự</small>
          <small id="helpId" class="form-text" style="color: green" v-else>Mật khẩu hợp lệ</small>
        </div>
        <div class="form-group">
          <label for>Repassword</label>
          <input
            type="password"
            :class="{'form-control isError': !validatePassword, 'form-control' : validatePassword}"
            v-model="userRegister.c_password"
            aria-describedby="helpId"
            placeholder="Nhập lại mật khẩu"
          />
          <small
            id="helpId"
            class="form-text"
            style="color: red"
            v-if="!validatePassword && userRegister.c_password.length != 0"
          >Mật khẩu không trùng khớp</small>
          <small
            id="helpId"
            class="form-text"
            style="color: green"
            v-if="validatePassword && userRegister.c_password.length != 0"
          >Mật khẩu trùng khớp</small>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <b-button
            class="mt-2 btn-success"
            v-if="validatePassword == true"
            block
            @click="registerAccount();$bvModal.hide('bv-modal-example')"
          >Submit</b-button>
        </div>
        <div class="col-sm-6">
          <b-button class="mt-2 btn-danger" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { EventBus } from "./bus/event-bus.js";

export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      userRegister: {
        name: "",
        username: "",
        email: "",
        password: "",
        c_password: "",
      },
    };
  },
  props: {},
  methods: {
    login() {
      this.$emit("login", this.input);
    },
    registerAccount() {
      EventBus.$emit("registerUser", this.userRegister);
    },
    isGuest() {
      EventBus.$emit("setGuest", true);
    },
    removeAccents(str) {
      var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ",
      ];
      for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
      }
      return str;
    },
  },
  computed: {
    validatePassword() {
      if (
        this.userRegister.password == this.userRegister.c_password &&
        this.userRegister.password != "" &&
        this.validateEmail == true
      ) {
        return true;
      }
      return false;
    },
    validateEmail() {
      if (
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.userRegister.email
        )
      ) {
        return true;
      }
      return false;
    },
    validateUsername() {
      if (
        (this.userRegister.username.length == 0 ||
          this.userRegister.username.length <= 5) &&
        !/\S/.test(this.userRegister.username)
      ) {
        return false;
      }
      return true;
    },
    validateName() {
      if (
        this.userRegister.name.length == 0 ||
        this.userRegister.name.length <= 5
      ) {
        return false;
      }
      return true;
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
.isError {
  border-color: red;
}
</style>
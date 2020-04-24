<template>
  <div id="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <el-divider></el-divider>
      <span>没有账号?</span>
      <el-link type="primary" :underline="false" href="/register">立即注册</el-link>
    </el-form>
  </div>
</template>

<script>
import { postLogin } from "network/session";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["getAdminInfo"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log("submit!");
          postLogin(this.ruleForm).then(res => {
            // console.log(res.data);
            if (res.data.status === 0) {
              alert(res.data.message);
            } else if (res.data.status === 1) {
              this.getAdminInfo();
              alert(res.data.success);

              this.$router.replace("/");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
#login {
  width: 30%;
  margin: 0 auto;
  margin-top: 88px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 277px;
  /* position: relative; */
}
.el-form {
  width: 80%;
  margin: 0 auto;
  padding-top: 34px;
  padding-right: 23px;
}
.el-form span {
  font-size: 14px;
  margin-right: 13px;
}
</style>
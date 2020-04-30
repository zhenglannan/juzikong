<template>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
     
      <el-form-item label="新密码" prop="password" required>
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" required>
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import { updatePwd } from "network/session";
import { mapActions } from "vuex";

export default {
  name: "changePwd",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
      ...mapActions(["getAdmin"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          updatePwd(this.ruleForm).then(res => {
            console.log(res);
            if (res.data.status === 0) {
              alert(res.data.message);
            } else {
              alert(res.data.message);
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
/* #register {
  width: 30%;
  margin: 0 auto;
  margin-top: 140px;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 342px;
} */
.demo-ruleForm {
  width: 40%;
  margin: 0 auto;
  padding-top: 34px;
  padding-right: 23px;
}
</style>
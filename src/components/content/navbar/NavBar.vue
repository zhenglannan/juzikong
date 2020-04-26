<template>
  <div id="navbar">
    <el-button type="primary" @click="post" >发布句子</el-button>
    <router-link to="/home">首页</router-link>
    <router-link to="/discovery">句子</router-link>
    <router-link to="/channels">分类</router-link>
    <a @click="toProfile">我的</a>
    <div class="enterOperation" v-if="!login">
      <router-link to="/login">登陆</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="enterOperation" v-else>
      <!-- <router-link >登陆</router-link> -->
      <a @click="loginOut">退出</a>
    </div>
    <PostDialog :dialogFormVisible="dialogFormVisible"></PostDialog>
  </div>
  
</template>

<script>
import { signout } from "network/session";
import PostDialog from "content/dialog/PostDialog";
import { mapState, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      dialogFormVisible: false
    };
  },
  components: {
    PostDialog
  },
  methods: {
    ...mapMutations(["deleteAdminInfo",'setDialogFormVisible']),
    //登出
    loginOut() {
      signout().then(res => {
        console.log(res);
        // 删除管理员
        this.deleteAdminInfo();
        // this.checkLogin();
        //跳转登陆界面
        this.$router.replace("/login");
      });
    },
    // 跳转个人主页
    toProfile() {
      console.log("adminInfo._id" + "   " + this.adminInfo._id);
      this.$router.push("/profile/" + this.adminInfo._id);
    },
    post() {
      // this.dialogFormVisible = true;
      this.setDialogFormVisible(true)
    }
  },
  computed: {
    ...mapState(["login", "adminInfo"])
  },
  created() {
    // this.checkLogin();
    // console.log("login" + " " + this.login);
  }
};
</script>

<style scoped>
#navbar {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* max-width: 1030px; */
  height: 71px;
  box-shadow: 0 1px 1px #e6e6e6;
  font-size: 14px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
</style>
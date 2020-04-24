<template>
  <div id="navbar">
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
      <a href @click="loginOut">退出</a>
    </div>
  </div>
</template>

<script>
import { signout } from "network/session";

import { mapState, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    ...mapMutations["deleteAdminInfo"],
    loginOut() {
      signout().then(res => {
        console.log(res);
        this.deleteAdminInfo();
      });
    },
    toProfile() {
      this.$router.push("/profile/" + this.adminInfo._id);
    }
  },
  computed: {
    ...mapState(["login", "adminInfo"])
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
<template>
  <div id="navbar">
    <router-link to="./home">首页</router-link>
    <router-link to="./discovery">句子</router-link>
    <router-link to="./channels">分类</router-link>
    <router-link to="./profile">我的</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#navbar {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1030px;
  height: 111px;
  box-shadow: 0 1px 1px #e6e6e6;
  margin: 0 auto;
  padding: 10px 15px;
  font-size: 14px;
}
</style>
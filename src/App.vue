<template>
  <div id="app">
    <NavBar class="navbar"></NavBar>
     <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
.navbar {
  
}
</style>

<template>
  <div class="profiletab">
    <div class="tabList">
      <div class="tabItem" @click='showCollections'>专辑({{userInfo.ctnCollection||0}})</div>
      <div class="tabItem" @click='showPosts'>句子({{userInfo.ctnPost||0}})</div>
      <div class="tabItem" @click='showLikes'>喜欢({{userInfo.ctnLike||0}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTab",
  data() {
    return {};
  },
  props:{
    userInfo:Object
  },
  methods: {
    showCollections(){
      
    }
  }
};
</script>

<style scoped>
.profiletab {
  padding: 5px 20px;
  overflow-x: auto;
  background: #ffffff;
}
.profiletab::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}
.tabItem {
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  cursor: pointer;
}
.tabItem:nth-child(1) {
  padding-left: 0;
}
</style>
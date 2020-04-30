<template>
  <!-- <div class="profiletab">
    <div class="tabList">
      <div class="tabItem" @click='showCollections'>专辑({{userInfo.collections.length||0}})</div>
      <div class="tabItem" @click='showPosts'>句子({{userInfo.posts.length||0}})</div>
      <div class="tabItem" @click='showLikes'>喜欢({{userInfo.likes.length||0}})</div>
    </div>
    
  </div>-->
  <el-tabs v-model="activeName" id="tabs">
    <el-tab-pane :label="'专辑('+userInfo.collections.length||0+') '" name="first">
      <ProfileCollections></ProfileCollections>
    </el-tab-pane>
    <el-tab-pane :label="'句子('+userInfo.posts.length||0+')'" name="second">
      <ProfilePosts></ProfilePosts>
    </el-tab-pane>
    <el-tab-pane :label="'喜欢('+userInfo.likes.length||0+')'" name="third">
      <ProfileLikes></ProfileLikes>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ProfileCollections from "./ProfileCollections";
import ProfilePosts from "./ProfilePosts";
import ProfileLikes from "./ProfileLikes";
import { mapState } from "vuex";

export default {
  name: "ProfileTab",
  data() {
    return {
      activeName: "second"
    };
  },
  components: {
    ProfileCollections,
    ProfilePosts,
    ProfileLikes
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // }
    // showCollections(){
    //   this.$router.push('/profileCollections')
    // },
    // showPosts(){
    //   this.$router.push('/profilePosts')
    // },
    // showLikes(){
    //   this.$router.push('/profileLikes')
    // }
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style scoped>
#tabs {
  background-color: #fff;
  padding: 5px 20px;
}
/* .profiletab {
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
} */
</style>
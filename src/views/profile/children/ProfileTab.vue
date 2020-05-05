<template>
  <!-- <div class="profiletab">
    <div class="tabList">
      <div class="tabItem" @click='showCollections'>专辑({{userInfo.collections.length||0}})</div>
      <div class="tabItem" @click='showPosts'>句子({{userInfo.posts.length||0}})</div>
      <div class="tabItem" @click='showLikes'>喜欢({{userInfo.likes.length||0}})</div>
    </div>
    
  </div>-->
  <div class="profileTab">
    <el-input placeholder="搜索句子" v-model="searchContent" class="search" @keydown.enter="search">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input>
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
  </div>
</template>

<script>
import ProfileCollections from "./ProfileCollections";
import ProfilePosts from "./ProfilePosts";
import ProfileLikes from "./ProfileLikes";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ProfileTab",
  data() {
    return {
      activeName: "second"
      // searchContent: ""
    };
  },
  components: {
    ProfileCollections,
    ProfilePosts,
    ProfileLikes
  },
  methods: {
    ...mapMutations(["setProfileSearch"]),
    // 用于实时反应不过来时查询
    search() {
      this.setProfileSearch(this.profileSearch);
    }
  },
  computed: {
    ...mapState(["userInfo", "profileSearch"]),
    searchContent: {
      get() {
        return this.profileSearch;
      },
      set(val) {
        this.setProfileSearch(val);
      }
    }
  }
};
</script>

<style scoped>
#tabs {
  background-color: #fff;
  padding: 5px 20px;
}
.search {
  position: absolute;
  display: inline-block;
  right: 24px;
  top: 2px;
  z-index: 3;
  width: 30%;
}
.profileTab {
  position: relative;
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
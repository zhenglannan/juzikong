<template>
  <el-container class="el-container">
    <el-col :span="24">
    <ProfileSentence v-for="(item) in filterSent" :key="item._id" :item=item></ProfileSentence>
    </el-col>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import ProfileSentence from "content/profile/ProfileSentence";
export default {
  name: "ProfilePosts",
  data() {
    return {};
  },
  components: {
    ProfileSentence
  },
  computed: {
    ...mapState(["userInfo"]),
    filterSent() {
      // 按发布时间降序
      let posts = this.userInfo.posts;
      function compare(a, b) {
        if (a._id > b._id) {
          return -1;//
        } else if (a._id < b._id) {
          return 1;
        } else {
          return 0;
        }
      }
       posts.sort(compare);
      return posts;
    }
  },
  methods: {
     
  }
};
</script>

<style scoped>
.el-container{
    padding: 0 20px;
    }
</style>
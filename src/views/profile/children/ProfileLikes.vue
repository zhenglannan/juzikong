<template>
  <el-container class="el-container">
    <el-col :span="24">
      <ProfileSentence v-for="(item) in userInfo.likes" :key="item._id" :item="item"></ProfileSentence>
    </el-col>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import ProfileSentence from "content/profile/ProfileSentence";
export default {
  name: "ProfileLikes",
  data() {
    return {};
  },
  components: {
    ProfileSentence
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {}
};
</script>

<style scoped>
.el-container {
  padding: 0 20px;
}
</style>
<template>
  <div class="container">
    <main>
      <UserInfo :userInfo="userInfo"></UserInfo>
      <ProfileTab :userInfo="userInfo"></ProfileTab>
    </main>
  </div>
</template>

<script>
import UserInfo from "./children/UserInfo";
import ProfileTab from "./children/ProfileTab";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      userInfo: ""
    };
  },
  components: {
    UserInfo,
    ProfileTab
  },
  methods: {
    ...mapActions(["getOtherUser"]),
    ...mapMutations(["setIsAdmin"]),
    // 判断是否是管理员
    isAdmin() {
      // console.log('得到的管理员'+'  '+this.adminInfo);
      console.log('profile'+'  '+this.$route.params.id);
      
      if (this.$route.params.id === this.adminInfo._id) {
        this.userInfo = this.adminInfo;
        this.setIsAdmin("true");
        console.log("是管理员");
      } else {    
        this.getOtherUser(this.$route.params.id);
        if (this.otherUserInfo !== null) {
          this.userInfo = this.otherUserInfo;
          this.setIsAdmin("false");
          console.log("不是管理员");
        } else {
          console.log("用户数据为空！");
        }
      }
    }
  },
  computed: {
    ...mapState(["login", "adminInfo", "otherUserInfo"]),
  },
  created() {
    this.isAdmin();
  }
};
</script>

<style scoped>
.container {
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
main {
  display: block;
}
</style>
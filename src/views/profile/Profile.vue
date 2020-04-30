<template>
  <div class="container">
    <main>
      <UserInfo ></UserInfo>
      <ProfileTab></ProfileTab>
    </main>
    <router-view></router-view>
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
      // userInfo: ""
    };
  },
  components: {
    UserInfo,
    ProfileTab
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    ...mapMutations(["setIsAdmin","setUserInfo"]),
    // 判断是否是管理员
    isAdmin() {
      // console.log('得到的管理员'+'  '+this.adminInfo);
      console.log('profile'+'  '+this.$route.params.id);
      
      if (this.$route.params.id === this.adminInfo._id) {
        this.setUserInfo(this.adminInfo)
        // this.userInfo = this.adminInfo;
        this.setIsAdmin(true);
        console.log("是管理员");
      } else {    
        this.getUserInfo(this.$route.params.id);
        if (this.userInfo !== null) {
          // this.setUserInfo(this.adminInfo)
          // this.userInfo = this.otherUserInfo;
          this.setIsAdmin(false);
          console.log("不是管理员");
        } else {
          console.log("用户数据为空！");
        }
      }
    }
  },
  computed: {
    ...mapState(["login", "adminInfo", "userInfo"]),
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
<template>
  <div class="container">
    <main>
      <UserInfo :userInfo="userInfo"></UserInfo>
      <ProfileTab></ProfileTab>
    </main>
  </div>
</template>

<script>
import UserInfo from "./children/UserInfo";
import ProfileTab from "./children/ProfileTab";
import { mapState, mapActions } from "vuex";

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
  methods: {},
  computed: {
    ...mapState(["login", "adminInfo", "otherUserInfo", "isAdmin"]),
    ...mapActions(["getOtherUserInfo"]),
    ...mapMustations(["setIsAdmin"]),
    // 判断是否是管理员
    isAdmin() {
      if (this.$route.params.id === adminInfo._id) {
        this.userInfo = this.adminInfo;
        this.setIsAdmin("true");
        console.log("是管理员");
      } else {
        getOtherUserInfo(this.$route.params.id);
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
  created() {
    console.log('profile');
    
    this.isAdmin();
    //  console.log(this.$route);
    // if (this.login) {
    // this.userInfo = this.adminInfo;
    //   console.log(nthis.userInfo);
    // }else{
    //   console.log(this.$route.query);
    // }
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
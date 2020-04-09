<template>
  <div class="container">
    <main>
      <UserInfo></UserInfo>
      <ProfileTab></ProfileTab>
    </main>
  </div>
</template>

<script>
import UserInfo from './children/UserInfo'
import ProfileTab from './children/ProfileTab'

export default {
  name: "Profile",
  data() {
    return {};
  },
  components:{
UserInfo,
ProfileTab
  },
  methods: {}
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
main{
    display: block;
}
</style>
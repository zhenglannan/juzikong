<template>
  <div class="profile">
    <div class="el-row clearfix">
      <div class=" el-col-6 el-col-xs-8 left_2xGJU">
        <div>
          <img
            :src="userInfo.avatar"
            class="avatar_1BQsh"
          />
        </div>
      </div>
      <div class=" el-col-18 el-col-xs-16 clearfix">
        <div class="el-row right_1P24C">
          <div class="nickname_2HR9f">{{userInfo.user_name}}</div>
          <a class="edit-profile_1BOKl">
            <span>编辑个人信息</span>
          </a>
        </div>
        <div class="el-col el-col-24">
          <div class="state_1an_I">
            <span class="num_1GWDg">{{userInfo.cntFollower||0}}</span>
            关注者
          </div>
          <div class="state_1an_I">
            正在关注
            <span class="num_1GWDg">{{userInfo.cntFollowing||0}}</span>
          </div>
          <div class="state_1an_I">
            收获喜欢
            <span class="num_1GWDg">{{userInfo.cntGetLike||0}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {};
  },
  props:{
    userInfo:Object
  },
  methods: {}
};
</script>

<style scoped>
.profile {
  margin: 20px 0;
  padding: 10px 15px 0;
  background-color: #fff;
  height: 148px;
}
.left_2xGJU {
  text-align: center;
}
.el-col-6 {
  width: 25%;
}
.avatar_1BQsh {
  height: 120px;
  width: 120px;
  border: 3px solid #eee;
  border-radius: 50%;
  margin-right: 14px;
  margin-bottom: 14px;
}
.el-col-18 {
  width: 75%;
}
.right_1P24C {
  padding: 10px;
}
.nickname_2HR9f {
  display: inline-block;
  margin: 10px 20px 10px 0;
  font-size: 26px;
}
.edit-profile_1BOKl {
  padding: 5px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
}
.el-col-24 {
  width: 100%;
}
.state_1an_I {
  display: inline-block;
  margin: 0 20px 10px 0;
  cursor: pointer;
}
.num_1GWDg {
  font-weight: 500;
}
.el-row::before{
    display: table;
    content: "";
}
.el-row::after{
   clear: both;
}
</style>
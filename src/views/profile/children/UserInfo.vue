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
          <a class="edit-profile_1BOKl" @click="$router.push('/setInfo')" v-if="userInfo._id===adminInfo._id">
            <span>编辑个人信息</span>
          </a>
          <el-button type="primary" round  size="mini" v-if="!showStar" @click="star" v-show='showBtn'>加关注</el-button>
          <el-button type="primary" round  size="mini" v-else @click="cancelStar" v-show='showBtn'>取消关注</el-button>
        </div>
        <el-col :span="24"><div class='intro'>{{userInfo.intro}}</div></el-col>
        <div class="el-col el-col-24">
          <div class="state_1an_I">
            <span class="num_1GWDg" @click="showFollers">{{userInfo.cntFollower||0}}</span>
            关注者
          </div>
          <div class="state_1an_I">
            正在关注
            <span class="num_1GWDg"  @click="showFollerings">{{userInfo.cntFollowing||0}}</span>
          </div>
          <div class="state_1an_I">
            收获喜欢
            <span class="num_1GWDg">{{userInfo.cntGetLike||0}}</span>
          </div>
        </div>
      </div>
    </div>
    <showfollowDialog :dialogFormVisible='dialogFormVisible' :title='title' :userfollow='userfollow' @childClose='childClose'></showfollowDialog>
  </div>
</template>

<script>
import showfollowDialog from 'content/dialog/showfollowDialog'
import { mapState,mapActions } from "vuex";
import {starUser,cancelStarUser} from 'network/session'
export default {
  name: "UserInfo",
  data() {
    return {
      dialogFormVisible:false,
      title:'',
      userfollow:[]
    };
  },
  components:{
showfollowDialog
  },
  // props:{
  //   userInfo:Object
  // },
  methods: {
    ...mapActions(['getAdmin']),
    // 关注
    star(){
      starUser(this.userInfo._id,this.userInfo.avatar,this.userInfo.user_name).then(res=>{
        if(res.data.status===1){
          this.getAdmin();
          this.userInfo.cntFollower++;
          alert(res.data.message)
        }
      })
    },
    // 取消关注
    cancelStar(){
      cancelStarUser(this.userInfo._id,this.userInfo.avatar,this.userInfo.user_name).then(res=>{
        if(res.data.status===1){
          this.getAdmin();
          this.userInfo.cntFollower--;
          alert(res.data.message)
        }
      })
    },
    // 显示关注者列表
    showFollers(){
      this.userfollow=[...this.userInfo.followers],
      this.dialogFormVisible=true;
      this.title='关注者'
    },
    // 显示正在关注列表
    showFollerings(){
      this.userfollow=[...this.userInfo.followings],
      this.dialogFormVisible=true;
            this.title='正在关注'
    },
    childClose(){
      this.dialogFormVisible=false
    }
  },
  computed: {
    ...mapState(["userInfo",'isAdmin','adminInfo']),
    // 是否显示加注
    showStar(){
      return this.adminInfo.followings.some(item=>item._id===this.userInfo._id)
    },
    // 是管理员时不用关注按钮
    showBtn(){
      return this.userInfo._id!==this.adminInfo._id
    }
  },
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
  /* cursor: pointer; */
}
.num_1GWDg {
  font-weight: 500;
  cursor: pointer
}
/* .num_1GWDg:last-child{
  cursor:none
} */

.el-row::before{
    display: table;
    content: "";
}
.el-row::after{
   clear: both;
}
.intro{
  display: inline-block;
    padding: 0 20px 10px 0;
    color: #888;
    font-size: 14px;
}
</style>
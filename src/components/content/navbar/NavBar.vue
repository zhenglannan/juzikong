<template>
  <div id="navbar">
    <el-button type="primary" @click="post">发布句子</el-button>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
      placeholder="搜索..."
      :clearable="true"
    >
      <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
    </el-autocomplete>
    <router-link to="/home">首页</router-link>
    <router-link to="/discovery">句子</router-link>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link" @click="$router.push('/channels')">
        分类
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="movies">电影台词</el-dropdown-item>
        <el-dropdown-item command="novels">小说摘抄</el-dropdown-item>
        <el-dropdown-item command="proses">散文美句</el-dropdown-item>
        <el-dropdown-item command="animes">动漫台词</el-dropdown-item>
        <el-dropdown-item command="series">连续剧台词</el-dropdown-item>
        <el-dropdown-item command="books">书籍名句</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <router-link to="/channels">分类</router-link> -->
    <a @click="toProfile">我的</a>
    <div class="enterOperation" v-if="!login">
      <router-link to="/login">登陆</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <div class="enterOperation" v-else>
      <!-- <router-link >登陆</router-link> -->
      <a @click="loginOut">退出</a>
    </div>
    <PostDialog :dialogFormVisible="dialogFormVisible"></PostDialog>
  </div>
</template>

<script>
import { getAllSentence } from "network/home";
import { signout } from "network/session";
import PostDialog from "content/dialog/PostDialog";
import { mapState, mapMutations } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      // dialogFormVisible: false
      state: "",
      timeout: null,
      keyWords: [],
      allSentences: []
    };
  },
  components: {
    PostDialog
  },
  methods: {
    ...mapMutations(["deleteAdminInfo", "setDialogFormVisible"]),
    //登出
    loginOut() {
      signout().then(res => {
        console.log(res);
        // 删除管理员
        this.deleteAdminInfo();
        // this.checkLogin();
        //跳转登陆界面
        this.$router.replace("/login");
      });
    },
    // 跳转个人主页
    toProfile() {
      console.log("adminInfo._id" + "   " + this.adminInfo._id);
      this.$router.push("/profile/" + this.adminInfo._id);
    },
    post() {
      // this.dialogFormVisible = true;
      this.setDialogFormVisible(true);
    },
    loadAll() {
      return [{ value: "鲁迅" }, { value: "张爱玲" }];
    },
    // 根据输入内容提供对应的输入建议
    querySearchAsync(queryString, cb) {
      var allSentences = this.allSentences;
      var results = queryString
        ? allSentences.filter(this.createStateFilter(queryString))
        : this.keyWords;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        // 输入建议列表的数据只来源于data:[]（results） 中的 value 字段！！！
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    // 选择之后直接跳转操作
    handleSelect(item) {
      // console.log(item);
      this.$router.push("/sentenceDetail/" + item._id);
    },
    search() {
      // console.log(123);
      this.$router.push({
        path: "/search",
        query: {
          q: this.state
        }
      });
    },
    // 点击下拉菜单
    handleCommand(command){
      this.$router.push('/categories/work/'+command)
    }
  },
  computed: {
    ...mapState(["login", "adminInfo", "dialogFormVisible"])
  },
  mounted() {
    this.keyWords = this.loadAll();
    // 对返回的数据进行处理，加上value字段
    getAllSentence().then(res => {
      // console.log(res.data);
      // this.allSentences=res.data;
      for (let item of res.data) {
        this.allSentences.push({ value: item.content, _id: item._id });
      }
    });
  },
  // created() {}
};
</script>

<style scoped>
#navbar {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* max-width: 1030px; */
  height: 71px;
  box-shadow: 0 1px 1px #e6e6e6;
  font-size: 14px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
.el-icon-search {
  cursor: pointer;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>
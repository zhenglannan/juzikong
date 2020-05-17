<template>
  <div class="container">
    <main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="句子" name="first">
          <SearchSen v-for="item in filterSentences" :key="item._id" :item=item></SearchSen>
        </el-tab-pane>
        <el-tab-pane label="用户" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="专辑" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="推荐" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </main>
  </div>
</template>

<script>
import SearchSen from "./SearchSen";
import { getSearch } from "network/home";

export default {
  name: "Search",
  data() {
    return {
      activeName: "first",
      currentPage:1,
      pageSize:10
    };
  },
  components: {
    SearchSen
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {
    filterSentences() {
      getSearch(this.$route.query.keyword,this.currentPage,this.pageSize).then(res => {
        // this.allSentences=res.data;
        console.log(res.data)
        // return res.data.find(item=>item.content.toLowerCase().indexOf(this.$route.query.q.toLowerCase()) === 0)
      });
    }
  },
  created() {   
    console.log(this.$route.query.keyword);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
.container main {
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
}
/* .container el-tab-pane{
display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 18px;
} */
</style>
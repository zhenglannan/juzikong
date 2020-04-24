<template>
  <div id="home" class="container">
    <HomeCategory :title="['电影台词','小说摘抄','散文美句','动漫台词','连续剧台词','书籍名句']"></HomeCategory>
    <div class="hometab">
      <span @click="getHot">热门</span>
      <span class="twotab" @click="getNew">最新</span>
    </div>
    <HomeSentenceList :list="sentencesList"></HomeSentenceList>
    <el-button :loading="loading" @click.native="load" v-if="newData.length">{{loadText}}</el-button>
  </div>
</template>

<script>
import HomeCategory from "views/home/children/HomeCategory";
import HomeSentenceList from "views/home/children/HomeSentenceList";
import { getHomeSentence } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
      sentencesList: [],
      newData: [],
      currentType: "hot"
    };
  },
  components: {
    HomeCategory,
    HomeSentenceList
  },
  methods: {
    // 首页句子请求
    getHomeSentence(type) {
      getHomeSentence(type).then(res => {
        console.log(res.data);
        // 1.a.push.apply(a,b)调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果
        // this.sentencesList.push.apply[this.sentencesList,res.data];
        // 2.扩展运算符合并数组
        this.newData = res.data;
        this.sentencesList = [...this.sentencesList, ...res.data];
      });
    },
    // 底部加载更多按钮
    load() {
      this.loading = true;
      setTimeout(() => {
        this.getHomeSentence(this.currentType);
        this.loading = false;
      }, 2000);
    },
    getHot() {
      this.getHomeSentence("hot");
      this.currentType = "hot";
    },
    getNew() {
      this.sentencesList = [];
      this.getHomeSentence("new");
      this.currentType = "new"; 
    }
  },
  created() {
    this.getHomeSentence("hot");
  },
  computed: {
    loadText() {
      if (this.loading === true) {
        return "加载中";
      } else {
        return "点击加载更多";
      }
    }
  }
};
</script>

<style scoped>
.hometab {
  margin-bottom: 15px;
  color: grey;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
}
.twotab::before {
  content: "/";
  margin: 0 15px;
  font-size: 14px;
}
</style>
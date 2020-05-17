<template>
  <div id="home" class="container">
    <div class="list">
      <HomeCategory :titles="titles" :types="types"></HomeCategory>
      <!-- <el-breadcrumb separator="/" class="hometab">
        <el-breadcrumb-item @click="getHot">热门</el-breadcrumb-item>
        <el-breadcrumb-item @click="getNew">最新</el-breadcrumb-item>
      </el-breadcrumb>-->

      <!-- <ul class="hometab"> -->
      <!-- <li v-for="(item,index)in tabs" :key="index">{{item}}</li> -->
      <div class="hometab">
        <span @click="getHot">热门</span>
        <span class="twotab" @click="getNew">最新</span>
      </div>
      <!-- </ul> -->
      <HomeSentenceList :list="sentencesList"></HomeSentenceList>
      <el-button :loading="loading" @click="load" v-if="newData.length">{{loadText}}</el-button>
    </div>
    <aside>
      <section class="card">
        <div class="card-header">最新动态</div>
        <div class="card-body">
          <latestNews v-for="(item,index) in latestList" :key="index" :item='item'></latestNews>
        </div>
      </section>
    </aside>
  </div>
</template>

<script>
import HomeCategory from "views/home/children/HomeCategory";
import HomeSentenceList from "views/home/children/HomeSentenceList";
import latestNews from "./children/latestNews";

import { getHomeSentence,getLatest } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      loading: false,
      sentencesList: [],//存储所有已加载的句子的容器
      newData: [],//新请求的数据，如果没有数据就不显示加载按钮
      currentType: "hot",
      currentPage: 1,
      pageSize: 10,
      tabs: ["热门", "最新"],
      titles:['电影台词','小说摘抄','散文美句','动漫台词','连续剧台词','书籍名句'],
      types:["movies", "novels", "proses", "animes", "series", "books"],
      latestList:Array,//最新动态
    };
  },
  components: {
    HomeCategory,
    HomeSentenceList,
    latestNews
  },
  methods: {
    // 首页句子请求
    getHomeSentence(type) {
      getHomeSentence(type, this.currentPage, this.pageSize).then(res => {
        // 请求数据之后page再+1
        this.currentPage++;
        // console.log(res.data);
        this.newData=[...res.data];
        // a.push.apply(a,b)调用a.push这个函数实例的apply方法，同时把，b当作参数传入，这样a.push这个方法就会遍历b数组的所有元素，达到合并的效果
        // this.sentencesList.push.apply[this.sentencesList,res.data];
        // concat拼接：返回新数组
        // 1.this.sentencesList.concat(res.data)
        // 2.push与扩展运算符：修改原数组（比concat快）
        this.sentencesList.push(...res.data)
        // 3.扩展运算符合并数组
        // this.sentencesList = [...this.sentencesList, ...res.data];
        
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
      this.sentencesList = [];
      this.currentPage = 1;
      this.getHomeSentence("hot");
      this.currentType = "hot";
    },
    getNew() {
      this.currentPage = 1;
      this.sentencesList = [];
      this.getHomeSentence("new");
      this.currentType = "new";
    },
    // 最新动态
    getLatest(){
      getLatest().then(res=>{
        // console.log(res);
        this.latestList=res.data;
      })
    }
  },
  created() {
    this.getHomeSentence("hot");
    this.getLatest();
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
.list {
  flex: 1;
}
.hometab {
  margin-bottom: 15px;
  color: grey;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
}
.twotab::before{
  content: "/";
    margin: 0 15px;
    font-size: 14px;
}
#home > aside {
  width: 100%;
  max-width: 370px;
  margin-left: 30px;
}
.card{
      margin-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
}
.card-header{
      padding: 10px 20px;
    font-weight: 700;
    color: #999;
    text-align: left;
}
.card-body{
  padding: 0 20px 10px;
}

</style>
<template>
  <div id="home" class="container">
    <HomeCategory :title="['电影台词','小说摘抄','散文美句','动漫台词','连续剧台词','书籍名句']"></HomeCategory>
    <div class="hometab">
      <span>推荐</span>
      <span class="twotab">热门</span>
    </div>
    <HomeSentenceList></HomeSentenceList>
  </div>
</template>

<script>
import HomeCategory from "views/home/children/HomeCategory";
import HomeSentenceList from "views/home/children/HomeSentenceList";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeCategory,
    HomeSentenceList
  },
  methods: {}
};
</script>

<style scoped>
.hometab {
  margin-bottom: 15px;
  color: grey;
  font-weight: 500;
  font-size: 18px;
}
.twotab::before {
  content: "/";
  margin: 0 15px;
  font-size: 14px;
}
</style>
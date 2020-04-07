<template>
  <div id="home">
    <HomeCategory :title="['散文','书籍','电影','动漫','连续剧','小说']"></HomeCategory>
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
/* padding: 0; */
#home {
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  /* display: flex; */
  /* justify-content: center; */
}
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
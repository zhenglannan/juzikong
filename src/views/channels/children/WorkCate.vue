<template>
    <Cate title="作品分类" :tags="['电影台词','小说摘抄','散文美句','动漫台词','连续剧台词','书籍名句']" @cateClick="cateClick"></Cate>
</template>

<script>
import Cate from "content/cate/Cate";
export default {
  name: "WorkCate",
  data() {
    return {
      types: ["movies", "novels", "proses", "animes", "series", "books"]
    };
  },
  components: {
    Cate
  },
  methods: {
    cateClick(index) {
      this.$router.push("/categories/work/" + this.types[index]);
    }
  },
  
};
</script>

<style scoped>
</style>
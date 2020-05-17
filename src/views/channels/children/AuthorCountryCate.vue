<template>
<Cate title="作者国家" :tags="authorType" @cateClick="cateClick"></Cate>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorCountryCate", 
  data() {
    return {
      authorType: ['美国','英国','法国','日本','意大利']
    }
  },
  components:{
Cate
  },
  methods:{
     cateClick(index) {
      this.$router.push("/categories/author/country/" + this.authorType[index]);
      // this.$router.push("/categories/authors");
    }
  }
}
</script>

<style scoped>
</style>
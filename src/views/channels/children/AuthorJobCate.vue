<template>
<Cate title="作者职业"  :tags="authorType"  @cateClick="cateClick"></Cate>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorJobCate", 
  data() {
    return {
      authorType:['诗人','漫画家','歌手','演员','主持人']
    }
  },
  components:{
Cate
  },
  methods:{
     cateClick(index) {
      this.$router.push("/categories/author/job/" + this.authorType[index]);
    }
  }
}
</script>

<style scoped>
</style>
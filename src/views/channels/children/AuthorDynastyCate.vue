<template>
<Cate title="作者朝代" :tags="authorType"  @cateClick="cateClick"></Cate>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorDynastyCate", 
  data() {
    return {
       authorType:['汉朝','宋朝','明朝','清朝','近现代']
    }
  },
  components:{
Cate
  },
  methods:{
    cateClick(index) {
      this.$router.push("/categories/author/dynasty/" + this.authorType[index]);
    }
  }
}
</script>

<style scoped>
</style>
<template>
<div>
<Cate title="作者职业" :tags="['诗人','漫画家','歌手','演员','哲学家','科学家','作家','音乐家','导演','主持人']"></Cate>
</div>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorJobCate", 
  data() {
    return {}
  },
  components:{
Cate
  },
  methods:{}
}
</script>

<style scoped>
</style>
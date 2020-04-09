<template>
<div>
<Cate :tags="['先秦','汉朝','魏晋','隋唐五代','宋朝','明朝','清朝','近现代']"></Cate>
</div>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorDynastyCate", 
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
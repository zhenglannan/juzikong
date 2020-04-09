<template>
<div>
<Cate :tags="['美国','英国','法国','德国','日本','希腊','意大利']"></Cate>
</div>
</template>

<script>
import Cate from 'content/cate/Cate'
export default {
  name:"AuthorCountryCate", 
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
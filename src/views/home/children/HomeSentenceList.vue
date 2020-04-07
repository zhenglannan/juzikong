<template>
<div class="homeSentenceList">
<HomeSentence></HomeSentence>
</div>
</template>

<script>
import HomeSentence from './HomeSentence'
export default {
  name:"HomeSentenceList", 
  data() {
    return {}
  },
  components:{
HomeSentence
  },
  methods:{}
}
</script>

<style scoped>
.homeSentenceList{
  width: 50%;
}
</style>
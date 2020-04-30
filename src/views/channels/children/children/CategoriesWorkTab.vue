<template>
  <div>
    <TabControl @workSelect="workSelect" :tabs="tabs"></TabControl>
  </div>
</template>

<script>
import TabControl from "common/tabControl/TabControl";
export default {
  name: "CategoriesWorkTab",
  data() {
    return {
      tabs: [
        "电影台词",
        "小说摘抄",
        "散文美句",
        "动漫台词",
        "连续剧台词",
        "书籍名句"
      ]
    };
  },
  components: {
    TabControl
  },
  methods: {
    workSelect(index) {
      // 获取专辑信息传递query
      // this.getCollection(tabs[index])
    }
  },
  created() {
    console.log(this.$route.params.workId);
  }
};
</script>

<style scoped>
</style>
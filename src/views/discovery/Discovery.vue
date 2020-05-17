<template>
  <div class="container">
    <TagsControl :tags=tags ></TagsControl>
    <router-view></router-view>
  </div>
</template>

<script>
import TagsControl from "common/tagsControl/TagsControl";
export default {
  name: "Discovery",
  data() {
    return {
      tags:["热门",
          "最新",
          "原创",
          "精选",
          "搞笑",
          "语录",
          "生活",
          "歌词",
          "电影",
          "英语",
          "随笔",
          "诗词"]
    };
  },
  components: {
    TagsControl,
  },
  methods: {
  },
  created() {
        // console.log('discovery'+' '+this.$route.params);
  }
};
</script>

<style scoped>
</style>
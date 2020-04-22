<template>
  <div class="container">
    <TagsControl :tags=tags @selectTab='selectTab'></TagsControl>
    <DiscoveryContent></DiscoveryContent>
  </div>
</template>

<script>
import TagsControl from "common/tagsControl/TagsControl";
import DiscoveryContent from "./children/DiscoveryContent";

import { getDiscovery } from "network/discovery";
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
    DiscoveryContent
  },
  methods: {
    getDiscovery() {
      getDiscovery().then(res => {
        console.log(res.data);
      });
    },
    selectTab(index){
      var tag=tags[index];
      
    }
  },
  created() {
    this.getDiscovery();
  }
};
</script>

<style scoped>
</style>
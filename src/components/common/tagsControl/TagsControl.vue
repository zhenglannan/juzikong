<template>
  <div>
    <ul class="menu">
      <li v-for="(item, index) in tags" :key="index" @click="selectTab(index)">
        <a :class="{active:currentIndex===index}"> {{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TagsControl",
  data() {
    return {
      currentIndex:0
    };
  },
  props: {
    tags: {
      type: Array,
      default() {
        return [
          "热门",
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
          "诗词"
        ];
      }
    }
  },
  methods: {
    selectTab(index){
      this.currentIndex=index;
    }
  }
};
</script>

<style scoped>
.menu {
  position: relative;
  white-space: nowrap;
  /* overflow-x: auto; */
}
.menu li {
  display: inline-block;
  font-size: 16px;
  color: #888;
}
.menu li a {
  color: #888;
}
.menu li a.active {
  color: #222;
}
.menu li + li::before {
  content: "/";
  margin: 0 15px;
  font-size: 14px;
  color: #e6e6e6;
}
</style>
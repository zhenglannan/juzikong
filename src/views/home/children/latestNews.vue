<template>
  <section class="container_K0fHb">
    <div class="wrapper">
      <!-- 第一行 -->
      <div class="top">
        <img :src="item.avatar" class="avatar" @click="$router.push('/profile/'+item.userId)" />
        <div class="top-content">
          <a @click="$router.push('/profile/'+item.userId)">{{item.name}}</a>
          <span>喜欢了句子</span>
        </div>
      </div>
      <!-- 底部 -->
      <p class="content"><a @click="$router.push('/sentenceDetail/'+item.sentenceId)">「{{item.content}}」</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "latestNews",
  data() {
    return {};
  },
  props: {
    item: Object
  },
  methods: {}
};
</script>

<style scoped>
.container_K0fHb {
  display: flex;
  padding: 10px 0;
  font-size: 13px;
}
.wrapper {
  flex: 1;
  min-width: 0;
}
.top {
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.avatar {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50%;
}
.top-content {
  overflow: hidden;
  text-overflow: ellipsis;
}
.top-content a {
  padding: 0 3px;
}
.top-content span {
  color: #999;
}
.content{
      margin-top: 5px;
    padding-left: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
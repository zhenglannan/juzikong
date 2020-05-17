<template>
  <div class="card">
    <div class="card-container">
      <div class="cover">
        <a>
          <img :src="item.cover" alt />
        </a>
      </div>
      <div class="content">
        <div class="content-title">
          <a>
            <b>{{item.name}}</b>
          </a>
        </div>
        <div>
          <p class="content-post">
            {{item.intro}}
          </p>
        </div>
        <a class="link" @click="$router.push('/collectionDetail/'+item._id)">
          <strong>查看全部{{item.name}}的经典台词</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionAuthorItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
.card {
  display: inline-block;
  width: 47%;
  vertical-align: top;
  padding: 0 10px;
  margin-bottom: 15px;
}
.card-container {
  display: flex;
  border: 1px solid #e6e6e6;
  padding: 10px 15px;
}
.cover {
  width: 150px;
  height: 150px;
  overflow: hidden;
}
.cover img {
  width: 100%;
}
.content {
  flex: 1;
  margin-left: 15px;
}
.content-title {
  margin-bottom: 10px;
}
.content-post {
  height: 54px;
  font-size: 12px;
  line-height: 1.5;
  overflow: hidden;
}
.link {
  font-size: 12px;
}
</style>
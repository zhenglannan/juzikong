<template>
  <div class="card">
    <div class="card-container">
      <div class="cover">
        <a>
          <img src="https://static.juzicon.com/images/image-190923113502-DACI.png" alt />双子杀手
        </a>
      </div>
      <div class="content">
        <div class="content-title">
          <a>
            <b>《双子杀手》</b>
          </a>
        </div>
        <div>
          <p class="content-post">
            <span>
              <span>1.他是谁，他总能预知我的一举一动，就像个幽灵。</span>
              <br />
              <span>2.“我是最厉害的”“然而你并不是最厉害的”</span>
              <br />
              <span>3.我知道他为什么跟你一样厉害，他就是你。</span>
              <br />
              <span>4.你是谁？他是你的复制人。</span>
              <br />
              <span>5.你看不出来我很痛苦吗？别怀疑你自己。</span>
            </span>
          </p>
        </div>
        <a class="link">
          <strong>查看全部《双子杀手》的经典台词</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionsListItem",
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
  width: 48%;
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
  height: 200px;
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
  font-size: 12px;
  line-height: 1.5;
}
.link {
  font-size: 12px;
}
</style>
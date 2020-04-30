<template>
  <div class="wrapper">
    <div class="collection">
      <div class="img">
        <img :src="item.cover" />
      </div>
      <div class="info">
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
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
.wrapper {
  display: inline-block;
  margin-right: 18px;
  margin-bottom: 20px;
}
.collection {
  border: 1px solid #e6e6e6;
  background-color: #fff;
  width: 240px;
  overflow: hidden;
}
.img {
  position: relative;
  width: 240px;
  height: 240px;
}
.info {
  padding: 12px 10px;
  text-align: left;
  color: #888;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 14px;
}
</style>
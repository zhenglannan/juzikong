<template>
  <dl class="channel">
    <dt>{{title}}</dt>
    <dd v-for="(item,index) in tags" :key="index" class="tags">
      <a class="tag" @click="cateClick(index)">{{item}}</a>
    </dd>
  </dl>
</template>

<script>
export default {
  name: "Cate",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default() {
        return "";
      }
    },
    tags: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    cateClick(index){
      this.$emit('cateClick',index)
    }
  }
};
</script>

<style scoped>
.channel {
  /* width:920px; */
  margin: 20px 0;
  /* display: inline-block; */
}
.channel dt {
  font-size: 22px;
  margin-bottom: 10px;
}
.channel dt::before {
      content: "";
    display: inline-block;
    position: relative;
    top: 1px;
    width: 5px;
    height: 20px;
    margin-right: 10px;
    vertical-align: bottom;
    background-color: #000;
}
.tags{
      display: inline-block;
    width: 25%;
    padding: 5px 10px;
    text-align: center;
}
.tag{
      display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
}
</style>
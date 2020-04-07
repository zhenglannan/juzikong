<template>
  <div class="homecategory">
    <ul class="homeul">
      <li v-for="(item,index) in title" :key="index" class="homeli">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
  data() {
    return {};
  },
  props: {
    title: {
      type: Array
    }
  },
  methods: {}
};
</script>

<style scoped>
.homecategory{
      width: 50%;
}
.homeul {
  background-color: #fff;
  margin-bottom: 30px;
  /* width: 50%; */
}
.homeli {
  display: inline-block;
  width: 32.91%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border: 1px solid #e6e6e6;
}
</style>
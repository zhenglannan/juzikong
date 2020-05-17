<template>
  <div>
    <ul class="menu">
      <li v-for="(item, index) in tags" :key="index" @click="selectTab(index)">
        <a :class="{active:currentIndex===index}"> {{item}}</a>
      </li>
    </ul>
    
  </div>
  <!-- <el-breadcrumb separator="/"> -->
  <!-- <el-breadcrumb-item :to="{ path: '/DiscoveryContent/hot' }">首页</el-breadcrumb-item> -->
  <!-- <el-breadcrumb-item v-for="(item,index) in tags" :key="index" :to="{ path: '/discovery/'+item }">{{item}}</el-breadcrumb-item> -->
<!-- </el-breadcrumb> -->
</template>

<script>
export default {
  name: "TagsControl",
  data() {
    return {
      // 需要sessionStorage临时存储？？界面刷新
      // currentIndex需要在这个界面刷新时不变
      currentIndex:0
    };
  },
  props: {
    tags: Array
  },
  methods: {
    selectTab(index){
      this.currentIndex=index;
      this.$router.push('/discovery/'+this.tags[index])
      // this.$emit('selectTab',index)
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
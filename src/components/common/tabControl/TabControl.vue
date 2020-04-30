<template>
  <div>
    <div class="tabcontrol">
      <div class="nav-wrapper">
        <div class="tabList">
          <div class="tabnavbar">
            <div
              v-for="(item,index) in tabs"
              :key="index"
              class="tab"
              :class="{active:currentIndex===index}"
              @click="select(index)"
            >
              <a>{{item}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    tabs: Array
  },
  methods: {
    select(index) {
      this.currentIndex = index;
      this.$emit('workSelect',index)
      
    }
  }
};
</script>

<style scoped>
.tabcontrol {
  position: relative;
  margin: 0 0 15px;
}
.nav-wrapper {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}
.tabList {
  padding: 0 15px;
  overflow-x: auto;
}
.nav-wrapper ::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}
.tabnavbar {
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s;
  float: left;
  z-index: 2;
}
.tab {
  display: inline-block;
  position: relative;
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}
.tab a {
  color: inherit;
}
.tab a:hover {
  color: #409eff;
}
.active {
  border-bottom: 2px solid #409eff;
  color: #409eff;
  position: relative;
  z-index: 2;
}
</style>
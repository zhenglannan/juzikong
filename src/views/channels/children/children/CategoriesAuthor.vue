<template>
  <div class="container">
    <div class="main">
      <div class="filter-wrap">
        <div class="filter_3">
          <div class="filter_left">
            <span>国家</span>
          </div>
          <div class="filter_right">
            <el-button
              type="text"
              v-for="(item,index) in countries"
              :key="index"
              class="el_button"
              :class="{active:currentCountryIndex===index}"
              @click="selectCountry(index)"
            >{{item}}</el-button>
          </div>
        </div>
        <div class="filter_3">
          <div class="filter_left">
            <span>朝代</span>
          </div>
          <div class="filter_right">
            <el-button
              type="text"
              v-for="(item,index) in dynasties"
              :key="index"
              class="el_button"
              :class="{active:currentDynastyIndex===index}"
              @click="selectDynasty(index)"
            >{{item}}</el-button>
          </div>
        </div>
        <div class="filter_3">
          <div class="filter_left">
            <span>职业</span>
          </div>
          <div class="filter_right">
            <el-button
              type="text"
              v-for="(item,index) in jobs"
              :key="index"
              class="el_button"
              :class="{active:currentJobIndex===index}"
              @click="selectJob(index)"
            >{{item}}</el-button>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CategoriesAuthor",
  data() {
    return {
      countries: ["美国", "英国", "法国", "日本", "意大利"],
      dynasties: ["汉朝", "宋朝", "明朝", "清朝", "近现代"],
      jobs: ["诗人", "漫画家", "歌手", "主持人", "演员"],
      currentCountryIndex: 0,
      currentDynastyIndex: 0,
      currentJobIndex: 0
    };
  },
  methods: {
    selectCountry(index) {
      this.currentCountryIndex = index;
      // console.log(this.countries[index]);
      
      this.$router.push("/categories/author/country/" + this.countries[index]);
    },
    selectDynasty(index) {
      this.currentDynastyIndex = index;
      this.$router.push("/categories/author/dynasty/" + this.dynasties[index]);
    },
    selectJob(index) {
      this.currentJobIndex = index;
      this.$router.push("/categories/author/job/" + this.jobs[index]);
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  background: #ffffff;
}
.filter-wrap {
  border-bottom: 24px solid #f6f6f6;
  padding: 24px 32px;
  /* width: 100%; */
}
.filter-wrap:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}
.filter_3 {
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 16px;
  border-bottom: 1px dashed #e8e8e8;
  font-size: 14px;
}
.filter_left {
  margin-right: 24px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 32px;
  padding-top: 3px;
}
.filter_left span::after {
  margin-left: 6px;
  content: ":";
}
.filter_right {
  flex: 1;
  line-height: 32px;
}

.el_button {
  color: rgba(0, 0, 0, 0.65);
  margin-right: 10px;
}
.el_button :hover {
  color: #409eff;
}
.active {
  color: #409eff;
}
</style>
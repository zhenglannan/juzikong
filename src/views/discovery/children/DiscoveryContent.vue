<template>
  <div class="content">
    <!-- <div>
      <div class="contentRow">
        <div class="el-col el-col-8 col_2g42A">
          <Sentence></Sentence>
        </div>
        <div class="el-col el-col-8 col_2g42A">
          <Sentence></Sentence>
        </div>
        <div class="el-col el-col-8 col_2g42A">
          <Sentence></Sentence>
        </div>
      </div>
    </div>-->
    <el-row class="content">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDiscovery } from "network/discovery";
import Sentence from "content/sentence/Sentence";
export default {
  name: "DiscoveryContent",
  data() {
    return {
      // tag:''
      pageSize: 10,
      currentPage: 1,
      list: []
    };
  },
  components: {
    Sentence
  },
  methods: {
    getTagSentence(tag) {
      getDiscovery(tag, this.currentPage, this.pageSize).then(res => {
        console.log(res.data);
      });
    }
  },
  watch: {
    $route(to) {
      // console.log(to);
      this.getTagSentence(to.params.tag);
    }
  },
  created() {
    console.log(this.$route.params);
    // this.tag=this.$route.params.tag;
    this.getTagSentence(this.$route.params.tag);
  }
};
</script>

<style scoped>
.content {
  margin-top: 30px;
}
/* .content {
  margin-top: 30px;
}
.contentRow {
  overflow-x: hidden;
}

.el-col-8 {
  width: 33.33333%;
}
.col_2g42A {
  padding: 0 10px;
}
.col_2g42A:first-child {
  padding-left: 0;
}
.col_2g42A:last-child {
  padding-right: 0;
} */
</style>
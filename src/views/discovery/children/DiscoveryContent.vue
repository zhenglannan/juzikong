<template>
  <div class="content">
    <div>
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
    </div>
  </div>
</template>

<script>
import Sentence from "content/sentence/Sentence";
export default {
  name: "DiscoveryContent",
  data() {
    return {};
  },
  components: {
    Sentence
  },
  methods: {}
};
</script>

<style scoped>
.content {
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
}
</style>
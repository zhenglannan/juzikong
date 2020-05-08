<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="电影台词" name="movies">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
      <el-tab-pane label="小说摘抄" name="novels">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
      <el-tab-pane label="散文美句" name="proses">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
      <el-tab-pane label="动漫台词" name="animes">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
      <el-tab-pane label="连续剧台词" name="series">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
      <el-tab-pane label="书籍名句" name="books">
        <CollectionsList :type="type"></CollectionsList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CollectionsList from "common/collections/CollectionsList";

export default {
  name: "CategoriesWork",
  data() {
    return {
      activeName: "",
      type: null
    };
  },
  components: {
    CollectionsList
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      // this.getCollection(tab.name);
      this.type=tab.name
    },
    // getCollection(type) {
    //   getWorkCollection(type).then(res => {
    //     this.list = res.data.data;
    //   });
    // }
  },
  created() {
    console.log(this.$route.params.type);
    
    this.activeName = this.$route.params.type;
    this.type= this.activeName;
    // this.getCollection(this.activeName);
  }
};
</script>

<style scoped>
.container {
  background: #ffffff;
}
/* .container el-tabs{
  width: 100%;
} */
.el-tabs{
  width: 100%;
}
</style>
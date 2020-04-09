<template>
  <div id="category" class="container">
    <WorkCate></WorkCate>
    <AuthorCountryCate></AuthorCountryCate>
    <AuthorDynastyCate></AuthorDynastyCate>
    <AuthorJobCate></AuthorJobCate>
  </div>
</template>

<script>
import WorkCate from "./children/WorkCate";
import AuthorCountryCate from "./children/AuthorCountryCate";
import AuthorDynastyCate from "./children/AuthorDynastyCate";
import AuthorJobCate from "./children/AuthorJobCate";

export default {
  name: "Channels",
  data() {
    return {};
  },
  components: {
    WorkCate,
    AuthorCountryCate,
    AuthorDynastyCate,
    AuthorJobCate
  },
  methods: {}
};
</script>

<style scoped>
#category {
  /* margin-top: 40px;
  margin-left: auto;
  margin-right: auto; */
  padding: 20px 40px;
  background-color: #fff;
}
</style>
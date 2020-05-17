<template>
  <div class="container">
    <div>
    <WorkCate></WorkCate>
    <AuthorCountryCate></AuthorCountryCate>
    <AuthorDynastyCate></AuthorDynastyCate>
    <AuthorJobCate></AuthorJobCate>
    </div>
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
  methods: {},
  created(){
        console.log('Channels'+' '+this.$route.params);

  }
};
</script>

<style scoped>
.container {
  /* margin-top: 40px;
  margin-left: auto;
  margin-right: auto; */
  padding: 20px 40px;
  background-color: #fff;
}
.container>div{
  width: 100%;
      padding-left: 51px;
}
</style>
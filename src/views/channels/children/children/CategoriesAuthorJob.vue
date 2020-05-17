<template>
  <div class="container">
    <CollectionsList :authorType="$route.params.authorType" exactAuthorType="job"></CollectionsList>
  </div>
</template>

<script>
import CollectionsList from "common/collections/CollectionsList";

export default {
  name: "CategoriesAuthorJob",
  data() {
    return {};
  },
  methods: {},
  components: {
    CollectionsList
  },
  created() {
    console.log(this.$route.params.authorType);
  }
};
</script>

<style scoped>
</style>
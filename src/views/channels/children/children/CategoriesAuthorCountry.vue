<template>
  <div class="container">
    <CollectionsList :authorType="$route.params.authorType" exactAuthorType="country"></CollectionsList>
  </div>
</template>

<script>
import CollectionsList from "common/collections/CollectionsList";

export default {
  name: "CategoriesAuthorCountry",
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
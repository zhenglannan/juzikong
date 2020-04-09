<template>
  <div class="container">
    <CategoriesWorkTab></CategoriesWorkTab>
    <CollectionsList></CollectionsList>
  </div>
</template>

<script>
import CategoriesWorkTab from "./CategoriesWorkTab";
import CollectionsList from "common/collections/CollectionsList";

export default {
  name: "CategoriesWork",
  data() {
    return {};
  },
  components: {
    CategoriesWorkTab,
    CollectionsList
  },
  methods: {}
};
</script>

<style scoped>
.container{
  background: #ffffff;
}
</style>
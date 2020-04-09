<template>
  <div class="collectionslist">
    <CollectionsListItem v-for="(item,index) in list" :key="index" :item="item"></CollectionsListItem>
  </div>
</template>

<script>
import CollectionsListItem from "./CollectionsListItem";
export default {
  name: "CollectionsList",
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CollectionsListItem
  },
  methods: {}
};
</script>

<style scoped>
.collectionslist {
  /* display: flex;
  flex-wrap: wrap; */
  padding: 20px;
  overflow: hidden;
}
</style>
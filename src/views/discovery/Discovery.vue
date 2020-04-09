<template>
  <div class="container">
    <TagsControl></TagsControl>
    <DiscoveryContent></DiscoveryContent>
  </div>
</template>

<script>
import TagsControl from "common/tagsControl/TagsControl";
import DiscoveryContent from "./children/DiscoveryContent";

export default {
  name: "Discovery",
  data() {
    return {};
  },
  components: {
    TagsControl,
    DiscoveryContent
  },
  methods: {}
};
</script>

<style scoped>
</style>
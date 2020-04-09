<template>
  <div>
    <TabControl></TabControl>
  </div>
</template>

<script>
import TabControl from "common/tabControl/TabControl";
export default {
  name: "CategoriesWorkTab",
  data() {
    return {};
  },
  components: {
    TabControl
  },
  methods: {},
  created() {
    console.log(this.$route.params.workId);
  },
};
</script>

<style scoped>
</style>
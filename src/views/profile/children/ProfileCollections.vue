<template>
  <div class="list">
    <div class="wrapper_add" @click="createCollection">
      <div class="add">
        <i class="el-icon-plus">创建专辑</i>
      </div>
    </div>
    <Collection v-for="(item) in userInfo.collections" :key="item._id" :item=item></Collection>
    <CollectionDialog :dialogFormVisible="dialogFormVisible"></CollectionDialog>
  </div>
</template>

<script>
import CollectionDialog from "content/dialog/CollectionDialog";
import { mapState, mapMutations } from "vuex";
import Collection from "./children/Collection";
export default {
  name: "ProfileCollections",
  data() {
    return {};
  },
  components: {
    Collection,
    CollectionDialog
  },
  methods: {
    ...mapMutations(["setDialogFormVisible"]),
    createCollection() {
      this.setDialogFormVisible(true);
    }
  },
  computed: {
    ...mapState(["userInfo", "dialogFormVisible"])
  }
};
</script>

<style scoped>
.list {
  text-align: left;
  min-height: 280px;
  max-width: 785px;
  margin: 0 auto;
  font-size: 0;
}
.wrapper_add {
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
.add {
  vertical-align: top;
  width: 242px;
  height: 285px;
  line-height: 285px;
  border: 1px solid #e6e6e6;
  text-align: center;
  background-color: #f5f5f5;
  font-size: 16px;
      margin-right: 18px;
    margin-bottom: 20px;
}
</style>
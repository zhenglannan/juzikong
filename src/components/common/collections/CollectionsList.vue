<template>
  <div class="collectionslist">
    <CollectionsListItem v-for="(item,index) in list" :key="index" :item="item"></CollectionsListItem>
    <footer class="pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        :hide-on-single-page="showPage"
      ></el-pagination>
    </footer>
  </div>
</template>

<script>
import { getWorkCollection } from "network/category";
import CollectionsListItem from "./CollectionsListItem";
export default {
  name: "CollectionsList",
  data() {
    return {
      pageSize: 20,
      currentPage: 1,
      total: null,
      list: [],
      currentType: ""
    };
  },
  props: {
    type: {
      type: String,
      default() {
        return "";
      }
    }
  },
  components: {
    CollectionsListItem
  },
  methods: {
    // 当前改变----当前页码改变之后，触发这个函数
    handleCurrentChange(val) {
      // console.log("当前改变：" + val);
      this.currentPage = val;
      this.getCollection(this.currentType);
    },
    // 获取对应type数据
    getCollection(type) {
      getWorkCollection(type, this.currentPage, this.pageSize).then(res => {
        this.total = res.data.total;
        this.list = res.data.data;
      });
    }
  },
  created() {
    this.getCollection(this.type);
  },
  watch: {
    // 监听props属性的变化
    type(newVal) {
      (this.currentType = newVal), this.getCollection(this.currentType);
    }
  },
  computed: {
    // 当不足一页隐藏pager
    showPage() {
      if (Number(this.total) < Number(this.pageSize)) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.collectionslist {
  /* display: flex;
  flex-wrap: wrap; */
  padding: 20px;
  overflow: hidden;
}
.pagination {
  margin: 20px 0;
  text-align: center;
}
.el-tabs__nav-wrap {
  padding: 0 15px;
}
.el-tabs__item {
  height: 50px;
  line-height: 50px;
}
</style>
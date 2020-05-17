<template>
  <div class="collectionslist">
    <div v-if="type">
      <CollectionsListItem v-for="(item,index) in list" :key="index" :item="item"></CollectionsListItem>
    </div>
    <div v-else>
      <CollectionAuthorItem v-for="(item,index) in list" :key="index" :item="item"></CollectionAuthorItem>
    </div>
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
import {
  getWorkCollection,
  getAuthorCountry,
  getAuthorDynasty,
  getAuthorJob
} from "network/category";
import CollectionsListItem from "./CollectionsListItem";
import CollectionAuthorItem from "./CollectionAuthorItem";

export default {
  name: "CollectionsList",
  data() {
    return {
      pageSize: 20,
      currentPage: 1,
      total: null,
      list: [],
      // authorList: [],
      currentType: ""
    };
  },
  props: {
    type: {
      type: String,
      default() {
        return "";
      }
    },
    authorType: String,
    exactAuthorType: String
  },
  components: {
    CollectionsListItem,
    CollectionAuthorItem
  },
  methods: {
    // 当前改变----当前页码改变之后，触发这个函数
    handleCurrentChange(val) {
      // console.log("当前改变：" + val);
      this.currentPage = val;
      this.getCollection(this.currentType);
    },
    // 获取对应type数据
    getCollection(realType) {
      if (this.type) {
        getWorkCollection(realType, this.currentPage, this.pageSize).then(res => {
          this.total = res.data.total;
          this.list = res.data.data;
        });
      }else if (this.exactAuthorType === "country") {
        getAuthorCountry(realType, this.currentPage, this.pageSize).then(res => {
          this.total = res.data.total;
          this.list = res.data.data;
        });
      } else if (this.exactAuthorType === "dynasty") {
        getAuthorDynasty(realType, this.currentPage, this.pageSize).then(res => {
          this.total = res.data.total;
          this.list = res.data.data;
        });
      } else if (this.exactAuthorType === "job") {
        getAuthorJob(realType, this.currentPage, this.pageSize).then(res => {
          this.total = res.data.total;
          this.list = res.data.data;
        });
      }
    }
  },
  created() {
    if (this.type) {
      this.getCollection(this.type);
    } else {
      // console.log(123+this.authorType);
      // console.log(this.exactAuthorType);
      
      this.getCollection(this.authorType);
      // this.currentType = this.authorType
    }
  },
  watch: {
    // 监听props属性的变化
    type(newVal) {
      (this.currentType = newVal), this.getCollection(this.currentType);
    },
    authorType(newVal) {
      // console.log('newval'+" "+newVal);
      
      (this.currentType = newVal), this.getCollection(this.currentType);
    },
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
  background: #ffffff;
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
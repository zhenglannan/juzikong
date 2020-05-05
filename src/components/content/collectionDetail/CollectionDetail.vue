<template>
  <div class="container">
    <!-- 主体内容 -->
    <div class="main">
      <div class="content">
        <!-- 顶部 title-->
        <div class="title">
          <div>
            此专辑由
            <a
              class="nickname"
              @click="$router.push('/profile',collection.creator._id)"
            >{{collection.creator.username}}</a>创建于
            <span>{{collection.create_time}}</span>
            <span class="count">(共收录{{collection.posts.length}}条句子)</span>
          </div>
          <div class="search">
            <el-input placeholder="搜索专辑里的句子" prefix-icon="el-icon-search" v-model="input"></el-input>
          </div>
        </div>
        <div class="list">
          <CollectionSen v-for="(item,index) in collection.posts" :key="item._id" :item="item"></CollectionSen>
        </div>
      </div>
    </div>
    <!-- 侧边 -->
    <div class="aside">
      <section class="card">
        <div class="card_body">
          <div class="cover">
            <img :src="collection.cover" width="100%" />
          </div>
          <div class="collectionName">
            <h1>{{collection.name}}</h1>
          </div>
          <div class="intro">
            <span>介绍</span>
            <p>{{collection.intro}}</p>
          </div>
          <el-button type="text" v-if="isAdmin" @click="addSenToCol">添加句子到专辑</el-button>
          <div class="operation" v-if="isAdmin">
            <a @click="editCol">编辑专辑</a>
            <a @click="deleteCol(collection._id)">删除</a>
          </div>
        </div>
      </section>
      <section>
        <div class="card-header_1KJGo">
          <span>
            <a>{{collection.name}}</a>的其它专辑
          </span>
        </div>
        <div class="card-body_27oCG">
          <ul class="list_2Kmaa">
            <li v-for="(item) in filterCollections" :key="item._id">
              <div>
                <a>
                  <img :src="item.cover" class="otherCover" />
                </a>
                <div class="otherContent">
                  <a>{{item.name}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <EditCollectionDialog
      :editdialogVisible="editdialogVisible"
      :collection="collection"
      @childClose="childEditClose"
    ></EditCollectionDialog>
    <PostToColDialog
      :dialogFormVisible="dialogFormVisible"
      :collection="collection"
      @childClose="childPostClose"
    ></PostToColDialog>
  </div>
</template>

<script>
import EditCollectionDialog from "content/dialog/EditCollectionDialog";
import PostToColDialog from "content/dialog/PostToColDialog";
import CollectionSen from "./CollectionSen";

import { findCollection, deleteCollection } from "network/session";
import { mapState, mapMutations, mapActions } from "vuex";
// import Sentence from "content/sentence/Sentence";
export default {
  name: "CollectionDetail",
  data() {
    return {
      collection: null,
      input: "",
      dialogFormVisible: false,
      editdialogVisible: false
    };
  },
  components: {
    CollectionSen,
    EditCollectionDialog,
    PostToColDialog
  },
  methods: {
    // ...mapMutations(["setDialogFormVisible"]),
    ...mapActions(["getAdmin"]),
    // 子组件不能改变props的值，只能传递事件给父组件，让父组件改变值
    childPostClose() {
      this.dialogFormVisible = false;
      this.findCollection(this.$route.params.id);
    },
    childEditClose() {
      this.editdialogVisible = false;
      this.findCollection(this.$route.params.id);
    },
    // 查找专辑
    findCollection(id) {
      findCollection(id).then(res => {
        // console.log(res.data.data);
        this.collection = res.data.data;
      });
    },
    // 编辑专辑对话框
    editCol() {
      this.editdialogVisible = true;
    },
    // 删除专辑
    deleteCol(id) {
      this.$confirm("此操作将永久删除该专辑, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteCollection(id).then(res => {
            if (res.data.status === 1) {
              this.getAdmin();
              this.$message({
                type: "success",
                message: "删除专辑成功!"
              });
              this.$router.push("/profile/" + this.adminInfo._id);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 添加句子到专辑对话框
    addSenToCol() {
      // if (this.dialogFormVisible === true) {
      //   this.dialogFormVisible = false;
      // }
      this.dialogFormVisible = true;
      // console.log(this.dialogFormVisible);
    }
  },
  created() {
    // console.log(this.$route.params.id);
    // 从总的专辑里查找
    this.findCollection(this.$route.params.id);
  },
  computed: {
    ...mapState(["isAdmin", "adminInfo"]),
    filterCollections() {
      return this.adminInfo.collections.filter(
        item => item._id !== this.collection._id
      );
    }
  }
};
</script>

<style scoped>
.editDialod {
  position: relative;
  z-index: 100;
}
.container {
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
}
.main {
  flex: 1;
}
.content {
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
}
.nickname {
  margin-left: 5px;
  margin-right: 5px;
  color: #409eff;
}
.count {
  color: #888;
  font-size: 13px;
}
.search {
  position: relative;
}
.input {
  width: 215px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: #262626;
  font-size: 14px;
  outline: none;
  padding: 3px 10px 3px 26px;
  z-index: 2;
}
.list {
  min-height: 400px;
}
.aside {
  width: 300px;
  margin-left: 15px;
}
.aside section:last-child {
  background-color: #fff;
  margin-bottom: 20px;
}
.card {
  background-color: #fff;
  margin-bottom: 20px;
}
.card_body {
  padding: 10px 20px;
}
.cover {
  text-align: center;
}
.collectionName {
  margin-top: 10px;
  font-size: 18px;
}
.intro > span {
  font-size: 14px;
  font-weight: 700;
}
.intro > p {
  font-size: 14px;
  line-height: 1.6;
}
.operation {
  height: 28px;
  line-height: 1.8;
}
.operation > a {
  font-size: 13px;
  color: #888;
  cursor: pointer;
  margin-right: 8px;
  margin-top: 2px;
}

.card-header_1KJGo {
  padding: 10px 20px;
  border-bottom: 1px solid #e6e6e6;
}
.card-body_27oCG {
  padding: 0 20px 10px;
}
.otherCover{
  width: 40px;
  height: 40px;
  margin-right: 8px;
  vertical-align: top;
  border-radius: 3px;
  vertical-align: middle;
}
.otherContent {
  display: inline-block;
}
.list_2Kmaa li {
    padding: 10px 0;
}
</style>
<template>
  <el-dialog title="添加到专辑" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
    <ul class="list_2Kmaa">
      <li v-for="item in adminInfo.collections" :key="item._id">
        <div>
          <a>
            <img :src="item.cover" class="cover" />
          </a>
          <div class="content">
            <a>{{item.name}}</a>
          </div>
        </div>
        <el-button type="primary" plain @click="collect(item._id)" >收藏</el-button>
        <!-- <el-button type="primary" plain2 @click="cancelCollect(item._id)" v-else>已收藏</el-button> -->

        <!-- <el-button
          type="primary"
          plain
          @click="collect(item._id)"
          :disabled="showDisable(item._id)"
        >收藏</el-button>-->
      </li>
    </ul>
    <div slot="footer" class="dialog-footer">
      <el-button @click="back()">取 消</el-button>
    </div>
  </el-dialog>
</template> 

<script>
import { mapState, mapMutations } from "vuex";
import { collect, cancelCollect, findCollection } from "network/session";

export default {
  name: "AddToCollection",
  data() {
    return {
      // showDisable: false
    };
  },
  props: {
    sentence: Object,
    dialogFormVisible: Boolean
  },
  methods: {
    // ...mapMutations(["setDialogFormVisible"]),
    // ...mapActions(["getAdmin"]),
    // 收藏
    collect(id) {
      findCollection(id).then(res => {
        // 重复收藏
        if (res.data.data.posts.some(item => item._id === this.sentence._id)) {
           this.$message.error('已收藏该句子，请勿重复收藏');
        } else {
          collect(id, this.sentence._id).then(res => {
            console.log(res);
            // 刷新管理员信息
            if (res.data.status === 1) {
              this.$message({
                message: "收藏成功",
                type: "success"
              });
              // this.showDisable = true;
              // this.getAdmin();
            }
          });
        }
      });
    },
    // 取消收藏
    // cancelCollect(id) {
    //   cancelCollect(id, this.sentence._id).then(res => {
    //     console.log(res);
    //     // 刷新管理员信息
    //     if (res.data.status === 1) {
    //       this.getAdmin();
    //     }
    //   });
    // },
    // 取消
    back() {
      this.$emit("childClose"); //子组件向外部传播一个childClose事件
    }
  },
  computed: {
    ...mapState(["adminInfo"]),
    // showCollect() {
    //   return function(id) {
    //     findCollection(id).then(res => {
    //       let collection = res.data.data;
    //       console.log(
    //         collection.posts.some(item => item._id === this.sentence._id)
    //       );

    //       return collection.posts.some(item => item._id === this.sentence._id);
    //     });
    //     // return true
    //   };
    // }
  }
};
</script>

<style scoped>
.list_2Kmaa {
  margin: 10px 0;
  padding: 0;
  list-style: none;
  max-height: 335px;
  min-height: 140px;
  overflow-y: auto;
}
.list_2Kmaa li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cover {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  vertical-align: top;
  border-radius: 3px;
  vertical-align: middle;
}
.content {
  display: inline-block;
}
</style>
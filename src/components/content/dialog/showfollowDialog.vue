<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible">
    <div class="card" v-for="(item) in userfollow" :key="item._id">
      <div class="cardBody">
        <div class="left">
          <a @click="toProfile(item._id)">
            <img :src="item.avatar" class="avatar" />
          </a>
        </div>
        <div class="center">
          <a class="author-link" @click="toProfile(item._id)">
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "showfollowDialog",
  data() {
    return {};
  },
  props: {
    title: String,
    userfollow: Array,
    dialogFormVisible: Boolean
  },
  methods: {
    toProfile(id) {
      this.$router.push("/profile/" + id);
      this.$emit("childClose");
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.cardBody {
  display: flex;
  margin-top: 4px;
}
.left {
  display: flex;
  align-items: center;
  margin-left: 4px;
}
.center {
  flex: 1;
  padding: 5px;
  /* align-items: center; */
  /* display: flex; */
}
.author-link {
  /* color: inherit; */
  font-weight: 600;
  /* flex布局只对块级元素有效 */
  /* display: block; */
  height: 58.89px;
  line-height: 58.89px;
}
.avatar {
  height: 44px;
  width: 44px;
  border: 1px solid #eee;
  border-radius: 50%;
  margin: 6px;
}
.el-dialog .el-dialog__header {
  border-bottom: 1px solid #dbdbdb;
}
</style>
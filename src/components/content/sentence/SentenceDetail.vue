<template>
  <div class="container">
    <div class="main">
      <!-- 句子 -->
      <section class="section_38e3g">
        <article class="container_sen">
          <div class="body">
            <h1>
              <span>{{sentence.content}}</span>
            </h1>
            <div class="source">
              <span class>{{sentence.referAuthorName}}</span>
              <span class="work">{{sentence.referWorkName}}</span>
            </div>
          </div>
          <footer>
            <div class="function clearfix">
              <span>
                <a @click="like">
                  <i class="el-icon-star-on" v-if="showLikes"></i>
                  <i class="el-icon-star-off" v-else></i>
                </a>
                <span class="number">{{sentence.cntLike}}</span>
              </span>
              <span>
                <a @click="addToCollection">
                  <img class="addAlbum" src="~assets/img/home/addAlbum.svg" />
                </a>
              </span>
            </div>
          </footer>
        </article>
        <span class="action" v-if="showDelete">
          <el-button type="text" class="delete-btn" @click="deleteSen">删除</el-button>
        </span>
      </section>
      <!-- 评论-->
      <section>
        <div class="comments">
          <div>
            <div>
              <el-input class="textarea" type="textarea" placeholder="评论" v-model="textarea"></el-input>
            </div>
            <div class="btns">
              <el-button type="primary" class="right button" @click="giveComment" :disabled="!textarea">评论</el-button>
            </div>
          </div>
          <span class="text_comments">最新评论</span>
          <!-- 展示评论 -->
          <ul class="comments-list" v-if="showComments">
            <li v-for="(item,index) in filterSent" :key="index">
              <div>
                <div class="comment-singal">
                  <div>
                    <div class="content_2Mw2N">
                      <span>{{item.username}}</span>
                      <span>{{item.content}}</span>
                    </div>
                    <div class="bottom">
                      <span>{{item.create_time}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul v-else class="no-comment">
            <li>还没有评论，快来抢沙发吧~</li>
          </ul>
        </div>
      </section>
    </div>
    <aside></aside>
    <AddToCollection
      :dialogFormVisible="dialogFormVisible"
      :sentence="sentence"
      @childClose="childPostClose"
    ></AddToCollection>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  findSentence,
  deletePosts,
  comment,
  setLike,
  removeLike
} from "network/session";
import AddToCollection from "content/dialog/AddToCollection";
export default {
  name: "SentenceDetail",
  data() {
    return {
      sentence: null,
      textarea: "",
      dialogFormVisible: false
    };
  },
  components:{
AddToCollection
  },
  computed: {
    ...mapState(["adminInfo"]),
    //
    showLikes() {
      return this.adminInfo.likes.some(item => item._id === this.sentence._id);
    },
    // 返回评论的长度来判断是否显示
    showComments() {
      return this.sentence.comment.length;
    },
    // 是否显示删除按钮
    showDelete() {
      // 判断对象数组用some！！！some返回boolean对象
      return this.adminInfo.posts.some(item => item._id === this.sentence._id);
      // return this.adminInfo.posts.indexOf(this.sentence._id) !== -1;
    },
    // 评论过滤为倒序
    filterSent() {
      // 评论时间降序
      let sentence = this.sentence;
      function compare(a, b) {
        if (a.create_time > b.create_time) {
          return -1;
        } else if (a.create_time < b.create_time) {
          return 1;
        } else {
          return 0;
        }
      }
      sentence.comment.sort(compare);
      return sentence.comment;
    },
  },
  methods: {
    ...mapActions(["getAdmin"]),
    // 删除句子
    deleteSen() {
      if (this.sentence.cntLike !== 0) {
        this.$message({
          message:
            "无法删除：因为这个句子有被喜欢、收藏或者评论，如需删除，请联系管理员",
          type: "warning"
        });
        return;
      }

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deletePosts(this.sentence._id).then(res => {
            console.log(res);
            if (res.data.status === 1) {
              this.getAdmin();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$router.push("/profile/" + this.sentence.creator._id);
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
    // 评论
    giveComment() {
      comment(this.sentence._id, this.textarea).then(res => {
        console.log(res);
        if (res.data.status === 1) {
          alert(res.data.message);
          // 设置文本框为空，更新评论信息
          this.textarea = "";
          this.updateSentence(this.$route.params.id);
        }
      });
    },
    // 评论后更新句子
    updateSentence(id) {
      findSentence(id).then(res => {
        // console.log(res.data.data);
        this.sentence = res.data.data;
      });
    },
    // 点赞、取消点赞
    like() {
      if (!this.showLikes) {
        // 设置点赞
        setLike(this.sentence._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.getAdmin();
            this.sentence.cntLike++;
          } else if (res.data.status === 0) {
            alert(res.data.message);
          }
        });
      } else {
        // 取消点赞
        removeLike(this.sentence._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.sentence.cntLike--;
            this.getAdmin();
          }
        });
      }
    },
    addToCollection() {
      this.dialogFormVisible = true;
    },
    childPostClose() {
      this.dialogFormVisible = false;
    }
  },
  created() {
    // console.log(this.$route.params);
    // 创建时就查找句子
    this.updateSentence(this.$route.params.id);
  }
};
</script>

<style scoped>
.main {
  flex: 1;
}
.section_38e3g {
  position: relative;
}
.action {
  position: absolute;
  left: 120px;
  bottom: 0;
}
.action .delete-btn {
  margin-left: 8px;
  color: #f56c6c;
}
.container_sen {
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
}
.body {
  padding: 140px 80px;
}
.body > h1 {
  text-align: left;
  font-size: 23px;
  line-height: 1.5;
  font-weight: 400;
  word-break: break-word;
}
.source {
  margin-top: 30px;
  text-align: right;
  font-size: 13px;
  color: #888;
}
.link {
  font-size: 13px;
}
.work {
  margin-left: 5px;
  color: #222;
}
.container > aside {
  width: 300px;
  margin-left: 15px;
}
article > footer {
  padding: 10px 16px;
  border-bottom: 1px solid #e6e6e6;
}
.function {
  text-align: left;
  font-size: 20px;
}
.function > span {
  padding: 8px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.number {
  /* position: relative; */
  /* top: -2px; */
  margin-left: 4px;
  font-size: 14px;
  vertical-align: bottom;
}

.addAlbum {
  vertical-align: middle;
  display: inline-block;
  width: 18px;
}
.comments {
  padding: 20px 16px;
  background-color: #fff;
}
.no-comment {
  margin-top: 20px;
  min-height: 80px;
  padding: 20px 0;
  font-size: 14px;
  text-align: center;
}
.textarea {
  margin-bottom: 10px;
  font-size: 12px;
}
.btns {
  overflow: hidden;
}
.button {
  padding: 9px 15px;
  font-size: 12px;
}
.text_comments {
  font-size: 14px;
  font-weight: 700;
}
.comments-list {
  margin-top: 20px;
  min-height: 80px;
}
.comment-singal {
  display: flex;
  flex-direction: row;
  padding: 10px 0 9px;
}
.content_2Mw2N {
  flex: 1;
  /* padding-left: 10px; */
  font-size: 12px;
}
.content_2Mw2N > span:first-child {
  font-weight: 700;
  margin-right: 6px;
  color: #262626;
}
.bottom {
  margin-top: 10px;
}
.bottom > span {
  color: #ccc;
}
</style>
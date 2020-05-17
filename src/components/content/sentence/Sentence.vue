<template>
  <article class="scentence">
    <!-- 头部插槽 -->
    <slot name="header"></slot>

    <div class="scenbody">
      <pre class="scenbody-post" @click="$router.push('/sentenceDetail/'+item._id)">{{item.content}}</pre>
      <div class="scenbody-from">
        <span class="author">{{item.referAuthorName}}</span>
        <span class="work">{{item.referWorkName}}</span>
      </div>
    </div>

    <footer class="footer">
      <div class="functions clearfix">
        <span>
          <a>
            <img
              class="message"
              src="~assets/img/home/message.svg"
              @click="$router.push('/sentenceDetail/'+item._id)"
            />
            <span class="number">{{item.cntComment}}</span>
          </a>
        </span>
        <span>
          <a @click="like">
            <i class="el-icon-star-on" v-if="showLikes"></i>
            <i class="el-icon-star-off" v-else></i>
          </a>
          <span class="number">{{item.cntLike}}</span>
        </span>
        <span class="right" >
          <a @click="addToCollection()">
            <img class="addAlbum" src="~assets/img/home/addAlbum.svg" />
          </a>
        </span>
      </div>
      <!-- 底部插槽 -->
      <!-- <input type=s"text" placeholder="我也评论一句..." class="comment" v-model="text" /> -->
      <slot name="footer">
        <input type="text" placeholder="我也评论一句..." class="comment" v-model="text"   @keydown.enter="giveComment(item._id)"/>
        <ul class="comment-list" v-if="item.comment">
          <li v-for='(item,index) in filterSent' :key="index">
            <span>{{item.username}}</span>
            <span>{{item.content}}</span>
          </li>
        </ul>
      </slot>
    </footer>
     <AddToCollection
      :dialogFormVisible="dialogFormVisible"
      :sentence="singalItem"
      @childClose="childPostClose"
    ></AddToCollection>
  </article>
</template>

<script>
import { findSentence, setLike, removeLike ,comment} from "network/session";
import { mapState, mapActions } from "vuex";
import AddToCollection from "content/dialog/AddToCollection";

export default {
  name: "Sentence",
  data() {
    return {
      item: this.singalItem,
      text:'',
      dialogFormVisible: false,
      // sentence:
    };
  },
  components:{
AddToCollection
  },
  props: {
    singalItem: Object
  },
  computed: {
    ...mapState(["adminInfo"]),
    showLikes() {
      return this.adminInfo.likes.some(
        item => item._id === this.singalItem._id
      );
    },
    // 评论过滤为倒序
    filterSent() {
      // 评论时间降序
      let item = this.item;
      function compare(a, b) {
        if (a.create_time > b.create_time) {
          return -1;
        } else if (a.create_time < b.create_time) {
          return 1;
        } else {
          return 0;
        }
      }
      item.comment.sort(compare);
      return item.comment;
    },

  },
  methods: {
    ...mapActions(["getAdmin"]),
    // 点赞、取消点赞
    like() {
      if (!this.showLikes) {
        // 设置点赞
        setLike(this.item._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.getAdmin();
            this.item.cntLike++;
          } else if (res.data.status === 0) {
            alert(res.data.message);
          }
        });
      } else {
        // 取消点赞
        removeLike(this.item._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.item.cntLike--;
            this.getAdmin();
          }
        });
      }
    },
    // 评论
    giveComment(id){
      comment(id, this.text).then(res => {
        console.log(res);
        if (res.data.status === 1) {
          alert(res.data.message);
          // 设置文本框为空，更新评论信息??
          this.text = "";
          this.updateSentence();
        }
      });
    },
    // 收藏
    addToCollection() {
      this.dialogFormVisible = true;
    },
    childPostClose() {
      this.dialogFormVisible = false;
    },
    updateSentence(){
      findSentence(this.singalItem._id).then(res=>{
        this.item=res.data.data;
      })
    }
  },
  created() {
    // findSentence(this.singalItem._id).then(res => {
    //   // console.log(res);
    //   this.item = res.data.data;
    // });
  }
};
</script>

<style scoped>
.scentence {
  width: 100%;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 20px;
}
/* header {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
}
header img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
} */
.scenbody {
  padding: 100px 80px;
}
.scenbody-post {
  text-align: left;
  font-size: 18px;
  line-height: 1.7;
  /* 换行 */
  word-break: break-word;
  cursor: pointer;
}
.scenbody-from {
  margin-top: 30px;
  text-align: right;
  font-size: 13px;
}
.author {
  font-size: 13px;
}
.work {
  margin-left: 5px;
  color: #222;
}
.footer {
  padding: 0 16px;
  /* margin-bottom: 20px; */
}
.functions > span {
  display: inline-block;
  /* vertical-align: bottom; */
  padding: 0 8px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.number {
  /* position: relative; */
  /* top: -2px; */
  margin-left: 4px;
  font-size: 14px;
}
.message,
.addAlbum {
  vertical-align: middle;
  display: inline-block;
  width: 20px;
}
.comment {
  width: 100%;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 11px;
  border: none;
  border-top: 1px solid #e6e6e6;
  outline: none;
  resize: none;
  line-height: 20px;
}
.comment-list{
  /* padding-bottom: 14px; */
    text-align: left;
    font-size: 13px;
    overflow: hidden;
    max-height: 100px;
}
.comment-list li{
  margin-bottom: 5px;
}
.comment-list li span:first-child{
    color: #000;
    font-weight: 700;
    margin-right: 6px;
}
</style>
<template>
  <article class="scentence" v-if="showSentence">
    <div class="scenbody">
      <p
        class="scenbody-post"
        @click="$router.push('/sentenceDetail/'+singalItem._id)"
      >{{singalItem.content}}</p>
      <div class="scenbody-from">
        <span class="author">{{singalItem.referAuthorName}}</span>
        <span class="work">{{singalItem.referWorkName}}</span>
      </div>
    </div>

    <footer class="footer">
      <div class="functions clearfix">
        <span>
          <a @click="$router.push('/sentenceDetail/'+singalItem._id)">
            <span class="message">
              <i class="el-icon-edit"></i>
            </span>
            <span class="number">{{singalItem.cntComment}}</span>
          </a>
        </span>
        <span>
          <a @click="like">
            <span class="love">
              <i class="el-icon-star-on" v-if="showLikes"></i>
              <i class="el-icon-star-off" v-else></i>
            </span>
          </a>
          <span class="number">{{singalItem.cntLike}}</span>
        </span>
      </div>
    </footer>
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { setLike, removeLike, findSentence } from "network/session";
export default {
  name: "ProfileSentence",
  data() {
    return {
      singalItem: null
      // likenum: this.singalItem.cntLike
    };
  },
  props: {
    item: Object
  },
  computed: {
    ...mapState(["adminInfo", "profileSearch"]),
    // 是否显示已点赞图标
    showLikes() {
      return this.adminInfo.likes.some(
        item => item._id === this.singalItem._id
      );
    },
    // 实时显示查询到的句子
    showSentence() {
      if (this.profileSearch === null) {
        return true;
      } else {
        return this.singalItem.content.toLowerCase().indexOf(this.profileSearch.toLowerCase()) !== -1;
      }
    }
  },
  methods: {
    ...mapActions(["getAdmin"]),
    // 点赞、取消点赞实现图片变换
    like() {
      if (!this.showLikes) {
        // 设置点赞
        setLike(this.singalItem._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.getAdmin();
            this.singalItem.cntLike++;
          } else if (res.data.status === 0) {
            alert(res.data.message);
          }
        });
      } else {
        // 取消点赞
        removeLike(this.singalItem._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.singalItem.cntLike--;
            this.getAdmin();
          }
        });
      }
      // return this.singalItem.getLike? this.singalItem.getLike=false: this.singalItem.getLike=true
    }
  },
  created() {
    findSentence(this.item._id).then(res => {
      // console.log(res.data.data);
      this.singalItem = res.data.data;
    });
  }
};
</script>

<style scoped>
.scentence {
  padding: 15px 0;
  border-bottom: 1px solid gainsboro;
}

.scentence:last-child {
  border: none;
}
/* .scentence:last-child::after{
  content: 'no';
  display: block;
} */
.scenbody {
  /* padding: 30px 80px; */
}
.scenbody-post {
  margin-bottom: 30px;
  font-size: 16px;
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
  /* padding: 0 16px; */
  /* margin-bottom: 20px; */
}
.functions > span {
  display: inline-block;
  vertical-align: bottom;
  /* padding: 0 8px; */
  color: #000;
  text-decoration: none;
  /* cursor: pointer; */
  margin-right: 20px;
}
.number {
  /* position: relative; */
  /* top: -2px; */
  margin-left: 4px;
  font-size: 14px;
  vertical-align: bottom;
}
.message,
.love,
.addAlbum {
  vertical-align: middle;
  display: inline-block;
  width: 25px;
}
</style>
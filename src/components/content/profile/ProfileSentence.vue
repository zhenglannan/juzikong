<template>
  <article class="scentence">
    <div class="scenbody">
      <p class="scenbody-post">{{singalItem.content}}</p>
      <div class="scenbody-from">
        <span class="author">{{singalItem.referAuthorName}}</span>
        <span class="work">{{singalItem.referWorkName}}</span>
      </div>
    </div>

    <footer class="footer">
      <div class="functions clearfix">
        <span>
          <a>
            <span class="message">
              <i class="el-icon-edit"></i>
            </span>
            <span class="number">{{singalItem.cntComment}}</span>
          </a>
        </span>
        <span>
          <a @click="like">
            <span class="love">
              <i class="el-icon-star-on" v-if="singalItem.getLike"></i>
              <i class="el-icon-star-off" v-else></i>
            </span>
          </a>
          <span class="number">{{likenum}}</span>
        </span>
      </div>
    </footer>
  </article>
</template>

<script>
import { mapActions } from "vuex";
import { setLike, removeLike } from "network/session";
export default {
  name: "ProfileSentence",
  data() {
    return {
      likenum: this.singalItem.cntLike
    };
  },
  props: {
    singalItem: Object
  },
  methods: {
    ...mapActions(["getAdmin"]),
    // 点赞、取消点赞实现图片变换
    like() {
      if (this.singalItem.getLike === false) {
        // 设置点赞
        setLike(this.singalItem._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.getAdmin();
            // 改变图标形态
            this.singalItem.getLike = true;
            this.likenum++;
          } else if (res.data.status === 0) {
            alert(res.data.message);
          }
        });
      } else if (this.singalItem.getLike === true) {
        // 取消点赞
        removeLike(this.singalItem._id).then(res => {
          console.log(res);
          // 刷新管理员信息
          if (res.data.status === 1) {
            this.getAdmin();
            // 改变图标形态
            this.singalItem.getLike = false;
            this.likenum--;
          }
        });
      }
      // return this.singalItem.getLike? this.singalItem.getLike=false: this.singalItem.getLike=true
    }
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
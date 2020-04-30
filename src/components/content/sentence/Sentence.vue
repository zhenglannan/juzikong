<template>
  <article class="scentence">
    <!-- 头部插槽 -->
    <slot name="header"></slot>

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
            <img class="message" src="~assets/img/home/message.svg" />
            <span class="number">{{singalItem.cntComment}}</span>
          </a>
        </span>
        <span>
          <a>
            <img class="love" src="~assets/img/home/love.svg" />
            <span class="number">{{singalItem.cntLike}}</span>
          </a>
        </span>
        <span class="right">
          <a>
            <img class="addAlbum" src="~assets/img/home/addAlbum.svg" />
          </a>
        </span>
      </div>
      <!-- 底部插槽 -->
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script>
export default {
  name: "Sentence",
  data() {
    return {};
  },
  props: {
    singalItem: Object
  },
  methods: {
    // toOtherProfile() {
    //   // console.log(this.singalItem.creator._id);
    //   // this.$router.push({
    //   //   path: "/profile",
    //   //   query: this.singalItem.creator._id
    //   // });
    //    this.$router.push('/profile/'+this.singalItem.creator._id)
    // }
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
  vertical-align: bottom;
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
.love,
.addAlbum {
  vertical-align: middle;
  display: inline-block;
  width: 25px;
}
</style>
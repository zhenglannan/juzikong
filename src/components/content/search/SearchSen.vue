<template>
  <article class="scentence">
    <header v-if="singalItem.creator">
      <a @click="toOtherProfile">
        <img :src="singalItem.creator.avatar" class="avatar_30uNb" />
        <span class="username">{{singalItem.creator.username}}</span>
      </a>
    </header>

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
  </article>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { findSentence } from "network/session";
export default {
  name: "SearchSen",
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
    ...mapState(["adminInfo"])
  },
  methods: {
    ...mapActions(["getAdmin"]),
    // 点击用户
    toOtherProfile() {
      this.$router.push("/profile/" + this.singalItem.creator._id);
    }
  },
  created() {
    console.log(23);

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
.scentence > header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.username {
  vertical-align: super;
}
.avatar_30uNb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
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
<template>
  <div class="homeSentenceList">
    <Sentence v-for="(item) in list" :key="item._id" :singalItem=item>
      <header slot="header"  v-if="item.creator">
        <a @click="toOtherProfile(item.creator._id)">
          <img :src="item.creator.avatar" alt />
          <span>{{item.creator.username}}</span>
        </a>
      </header>
      <!-- <section slot="footer"> -->
         <!-- <el-input class="commentInput" type="text" placeholder="我也评论一句..." v-model="text" @keypress.enter="giveComment"></el-input> -->
        <!-- <input type="text" placeholder="我也评论一句..." class="comment" v-model="text"   @keydown.enter="giveComment(item._id)"/>
        <ul class="comment-list" v-if="item.comment">
          <li v-for='(item,index) in item.comment' :key="index">
            <span>{{item.username}}</span>
            <span>{{item.content}}</span>
          </li>
        </ul> -->
      <!-- </section> -->
    </Sentence>
  </div>
</template>

<script>
import Sentence from "content/sentence/Sentence";
export default {
  name: "HomeSentenceList",
  data() {
    return {
      text:''
    };
  },
  props:{
    list:Array 
  },
  components: {
    Sentence
  },
  methods: {
    // 点击用户
    toOtherProfile(id) {
       this.$router.push('/profile/'+id)
    },
    // 回车评论？？
    // giveComment(id){
    //   comment(id, this.text).then(res => {
    //     console.log(res);
    //     if (res.data.status === 1) {
    //       alert(res.data.message);
    //       // 设置文本框为空，更新评论信息??
    //       this.text = "";
    //     }
    //   });
    // }
  },
};
</script>

<style scoped>
.homeSentenceList {
  /* width: 50%; */
}

header{
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
      vertical-align: middle;
}


</style>
<template>
  <div class="homeSentenceList">
    <Sentence v-for="(item) in list" :key="item._id" :singalItem=item>
      <header slot="header"  v-if="item.creator">
        <a @click="toOtherProfile">
          <img :src="item.creator.avatar" alt />
          <span>{{item.creator.username}}</span>
        </a>
      </header>
      <section slot="footer">
        <input type="text" placeholder="我也评论一句..." class="comment" />
      </section>
    </Sentence>
  </div>
</template>

<script>
import Sentence from "content/sentence/Sentence";
export default {
  name: "HomeSentenceList",
  data() {
    return {};
  },
  props:{
    list:Array
  },
  components: {
    Sentence
  },
  methods: {
    toOtherProfile() {
       this.$router.push('/profile/'+this.singalItem.creator._id)
    } 
  },
};
</script>

<style scoped>
.homeSentenceList {
  width: 50%;
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
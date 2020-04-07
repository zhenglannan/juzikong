<template>
  <article class="scentence">
    <header>
      <a>
        <img src="~assets/img/favicon.png" alt />
      </a>
      <a>
        <span>用户名</span>
      </a>
    </header>
    <div class="scenbody">
      <p class="scenbody-post">sssssssssssssssssssssssssssssssssssssssssssss</p>
      <div class="scenbody-from">
        <span class="author">戴维・洛奇</span>
        <span class="work">《救火英雄》</span>
      </div>
    </div>
    <footer class="footer">
<div>
  
</div>
    </footer>
  </article>
</template>

<script>
export default {
  name: "HomeSentence",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.scentence {
  width: 100%;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 2px;
}
header {
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
}
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
.footer{
  padding: 0 16px;
}
</style>
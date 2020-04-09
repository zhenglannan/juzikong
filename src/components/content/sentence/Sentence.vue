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
      <p class="scenbody-post">睡着的时候一定要多做些梦，因为一生那么短，偏偏欲望又那么长。</p>
      <div class="scenbody-from">
        <span class="author">戴维・洛奇</span>
        <span class="work">《救火英雄》</span>
      </div>
    </div>
    <footer class="footer">
      <div class="functions clearfix">
        <span>
          <a>
            <img class="message" src="~assets/img/home/message.svg" />
            <span class="number">0</span>
          </a>
        </span>
        <span>
          <a>
            <img class="love" src="~assets/img/home/love.svg" />
            <span class="number">0</span>
          </a>
        </span>
        <span class="right">
          <a>
            <img class="addAlbum" src="~assets/img/home/addAlbum.svg" />
          </a>
        </span>
      </div>
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
  methods: {}
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
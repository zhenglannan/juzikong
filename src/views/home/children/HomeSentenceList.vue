<template>
  <div class="homeSentenceList">
    <Sentence>
      <section slot="footer">
        <input type="text" placeholder="我也评论一句..." class="comment" />
      </section>
    </Sentence>
    <Sentence>
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
  components: {
    Sentence
  },
  methods: {}
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
</style>
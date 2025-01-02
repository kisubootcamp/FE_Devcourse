<script>
export default {
  name: "Ex7",
  data() {
    return {
      text1: "<strong>하이라이트된 텍스트</strong>",
      text2: "일반 텍스트",
      highlight: true,
    };
  },
  methods: {
    handleHighlightClick() {
      this.highlight = true;
    },
    handleNormalClick() {
      this.highlight = false;
    },
  },
};
</script>
<template>
  <button @click="handleHighlightClick">하이라이트</button>
  <button @click="handleNormalClick">일반</button>
  <p v-if="highlight" v-html="text1"></p>
  <p v-else v-text="text2"></p>
</template>
<style scoped></style>

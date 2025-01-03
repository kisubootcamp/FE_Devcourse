<script>
export default {
  name: "Lv2Ex5",
  data() {
    return {
      selectedOption: "bold",
      messageHtml: "<strong>텍스트</strong>",
      messageItalic: "<em>텍스트</em>",
    };
  },
};
</script>
<template>
  <h1 v-if="selectedOption === 'bold'" v-html="messageHtml"></h1>
  <h1 v-else v-html="messageItalic"></h1>
</template>
<style scoped></style>

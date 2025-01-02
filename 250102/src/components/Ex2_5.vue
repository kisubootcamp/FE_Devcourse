<script>
export default {
  name: "App",
  data() {
    return {
      selectedOption: "italic", // 'bold'. 'italic'
      messageHTML: "<strong>텍스트</strong>",
      messageItalic: "<em>텍스트</em>",
    };
  },
};
</script>
<template>
  <h1 v-if="selectedOption === 'bold'" v-html="messageHTML"></h1>
  <h1 v-else-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
</template>
<style scoped></style>

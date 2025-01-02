<script>
export default {
  name: "Ex2_5",
  data() {
    return {
      selectedOption: "italic",
      boldText: "<strong>텍스트</strong>",
      italicText: "<em>텍스트</em>",
      plainText: "텍스트",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="selectedOption === 'bold'" v-html="boldText"></p>
    <p v-if="selectedOption === 'italic'" v-html="italicText"></p>
    <p v-else v-html="plainText"></p>
  </div>
</template>
<style></style>

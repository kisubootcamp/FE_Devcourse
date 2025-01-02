<script>
export default {
  name: "Ex1_9",
  data() {
    return {
      htmlContent: "<strong>HTML로 출력</strong>",
      plainText: "순수 텍스트로 출력",
    };
  },
};
</script>
<template>
  <div v-html="htmlContent"></div>
  <div v-text="plainText"></div>
</template>
<style></style>

<script>
export default {
  name: "Ex2_7",
  data() {
    return {
      option: "plain",
      htmlContent: "<strong>하이라이트된 텍스트</strong>",
      plainText: "일반 텍스트",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="option === 'highlight'" v-html="htmlContent"></p>
    <p v-else v-text="plainText"></p>
  </div>
</template>
<style></style>

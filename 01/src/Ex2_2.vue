<script>
export default {
  name: "Ex2_2",
  data() {
    return {
      isHtml: true,
      htmlContent: "<b>HTML을 사용한 텍스트</b>",
      plainText: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>
<template>
  <div v-if="isHtml" v-html="htmlContent"></div>
  <div v-else v-text="plainText"></div>
</template>
<style></style>

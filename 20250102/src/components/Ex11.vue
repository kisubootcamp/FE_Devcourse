<script>
export default {
  name: "Ex11",
  data() {
    return {
      isHtml: true,
      htmlContent: "<b>HTML을 사용한 텍스트</b>",
      planeContent: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>
<template>
  <h2>2. HTML 텍스트와 조건부 렌더링 혼합</h2>
  <p v-if="isHtml" v-html="htmlContent"></p>
  <p v-if="!isHtml" v-text="planeContent"></p>
</template>

<style scoped></style>

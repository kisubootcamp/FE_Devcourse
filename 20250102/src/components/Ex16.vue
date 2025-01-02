<script>
export default {
  name: "Ex16",
  data() {
    return {
      highlight: "<span style='color:red'>하이라이트</span>",
      normal: "보통",
    };
  },
};
</script>
<template>
  <h2>7. 동적 텍스트 처리</h2>
  <p v-html="highlight"></p>
  <p v-html="normal"></p>
</template>

<style scoped></style>

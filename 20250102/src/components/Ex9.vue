<script>
export default {
  name: "Ex9",
  data() {
    return {
      htmlCon: "<strong>HTML을 출력합니다!</strong>",
      textCon: "TEXT을 출력합니다!",
    };
  },
};
</script>
<template>
  <h2>9. 여러 텍스트 출력</h2>
  <p v-html="htmlCon"></p>
  <p v-text="textCon"></p>
</template>

<style scoped></style>

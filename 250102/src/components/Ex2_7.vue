<script>
export default {
  name: "App",
  data() {
    return {
      highlitedText: '<span style="color:red">하이라이트 텍스트</span>',
      normalText: "일반텍스트",
    };
  },
};
</script>
<template>
  <p v-html="highlitedText"></p>
  <p v-html="normalText"></p>
</template>
<style scoped></style>

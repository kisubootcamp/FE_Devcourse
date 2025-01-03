<script>
export default {
  name: "Lv2Ex7",
  data() {
    return {
      highText: '<span style="color:red">하이라이트 텍스트</span>',
      text: "일반 텍스트",
    };
  },
};
</script>
<template>
  <p v-html="highText"></p>
  <p v-text="text"></p>
</template>
<style scoped></style>

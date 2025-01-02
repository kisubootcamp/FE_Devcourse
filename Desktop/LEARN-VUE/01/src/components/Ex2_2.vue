<script>
export default {
  name: "Ex2_2",
  data() {
    return {
      isHtml: true,
      htmlTxt: "<b>HTML을 사용한 텍스트</b>",
      Txt: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>

<template>
  <p v-if="isHtml" v-html="htmlTxt"></p>
  <p v-else v-text="Txt"></p>
</template>

<style scoped></style>

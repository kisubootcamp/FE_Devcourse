<script>
export default {
  name: "Ex1_9",
  data() {
    return {
      htmlTxt: "<em>html텍스트</em>",
      txt: "텍스트",
    };
  },
};
</script>
<template>
  <p v-html="htmlTxt"></p>
  <p v-text="txt"></p>
</template>
<style scoped></style>

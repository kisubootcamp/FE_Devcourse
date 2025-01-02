<script>
export default {
  name: "Ex11",
  data() {
    return {
      isHtml: true,
      hdata: "<b>HTML을 사용한 텍스트</b>",
      data: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>
<template>
  <h1 v-if="isHtml" v-html="hdata"></h1>
  <h1 v-if="!isHtml" v-text="data"></h1>
</template>
<style scoped></style>

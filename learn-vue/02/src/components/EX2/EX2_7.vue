<script>
export default {
  name: "EX2_7",
  data() {
    return {
      isHtml: true,
      text: "<em>텍스트</em>",
    };
  },
};
</script>
<template>
  <p v-if="isHtml" v-html="text"></p>
  <p v-else v-text="text"></p>
</template>
<style></style>

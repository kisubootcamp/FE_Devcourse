<script>
export default {
  name: 'Ex1_9',
  data() {
    return {
      html: "<strong>여러 텍스트 출력</strong>",
      text: "여러 텍스트 출력"
    };
  },
};
</script>
<template>
  <h2>Lv1. 9번</h2>

  <p v-html="html"></p>
  <p v-text="text"></p>

  <hr />
</template>
<style scoped>
  
</style>
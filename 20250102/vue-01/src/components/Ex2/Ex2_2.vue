<script>
export default {
  name: 'Ex2_2',
  data() {
    return {
      isHtml: true,
      html: '<b>HTML을 사용한 텍스트</b>',
      text: 'HTML을 사용하지 않은 텍스트'
    };
  },
};
</script>
<template>
  <h2>Lv2. 2번</h2>

  <p v-if="isHtml" v-html="html"></p>
  <p v-else v-text="text"></p>

  <hr />
</template>
<style scoped>
  
</style>
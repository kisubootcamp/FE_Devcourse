<script>
export default {
  name: 'Ex2_7',
  data() {
    return {
      textType: 'highlight',
      highlightText: '<strong><em>하이라이트된 텍스트</em></strong>',
      plainText: '일반 텍스트'
    };
  },
};
</script>
<template>
  <h2>Lv2. 7번</h2>

  <p v-if="textType === 'highlight'" v-html="highlightText"></p>
  <p v-else v-text="plainText"></p>

  <hr />
</template>
<style scoped>
  
</style>
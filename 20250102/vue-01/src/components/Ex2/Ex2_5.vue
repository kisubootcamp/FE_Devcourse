<script>
export default {
  name: 'Ex2_5',
  data() {
    return {
      selectedOption: 'bold',
      boldText: '<strong>텍스트</strong>',
      italicText: '<em>텍스트</em>',
      text: '텍스트',
    };
  },
};
</script>
<template>
  <h2>Lv2. 5번</h2>

  <p v-if="selectedOption === 'bold'" v-html="boldText"></p>
  <p v-else-if="selectedOption === 'italic'" v-html="italicText"></p>
  <p v-else v-html="text"></p>

  <hr />
</template>
<style scoped>
  
</style>
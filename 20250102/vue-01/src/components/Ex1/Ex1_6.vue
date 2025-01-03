<script>
export default {
  name: 'Ex1_6',
  data() {
    return {
      message: "빈 문자열로 텍스트 변경"
    };
  },
};
</script>
<template>
  <h2>Lv1. 6번</h2>

  <p v-text="message"></p>

  <hr />
</template>
<style scoped>
  
</style>
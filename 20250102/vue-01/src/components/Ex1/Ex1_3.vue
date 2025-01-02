<script>
export default {
  name: 'Ex1_3',
  data() {
    return {
      message: '<strong>HTML을 출력합니다!</strong>'
    };
  },
};
</script>
<template>
  <h2>Lv1. 3번</h2>

  <p v-html="message"></p>

  <hr />
</template>
<style scoped>
  
</style>
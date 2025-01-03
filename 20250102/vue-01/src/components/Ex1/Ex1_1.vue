<script>
export default {
  name: 'Ex1_1',
  data() {
    return {
      isVisible: false
    };
  }
};
</script>
<template>
  <h2>Lv1. 1번</h2>

  <p v-if="isVisible">조건이 참입니다!</p>

  <hr />
</template>
<style scoped>
  
</style>
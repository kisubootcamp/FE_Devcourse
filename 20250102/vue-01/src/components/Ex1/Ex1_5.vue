<script>
export default {
  name: 'Ex1_5',
  data() {
    return {
      isVisible: true
    };
  },
};
</script>
<template>
  <h2>Lv1. 5번</h2>

  <p v-show="isVisible">조건이 참입니다!</p>

  <hr />
</template>
<style scoped>
  
</style>
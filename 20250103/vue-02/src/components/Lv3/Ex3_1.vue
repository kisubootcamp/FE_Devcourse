<script>
export default {
  name: 'Ex3_1',
  data() {
    return {
      items:['사과', '바나나', '오렌지']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 1번</h2>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
<script>
export default {
  name: 'Ex3_2',
  data() {
    return {
      person: { name: '홍길동', age: 25, job: '개발자' }
    };
  },
};
</script>
<template>
  <h2>Lv3 - 2번</h2>
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
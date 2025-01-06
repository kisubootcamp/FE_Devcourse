<script>
export default {
  name: 'Ex3_10',
  data() {
    return {
      items: ['Apple', 'Banana', 'Orange']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 10번</h2>
  <ul>
    <li v-for="item in items" :key="item">{{ item }} - {{ item.length }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
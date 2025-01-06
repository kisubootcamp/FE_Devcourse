<script>
export default {
  name: 'Ex3_4',
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Orange', 'Grapes']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 4번</h2>
  <ul>
    <li v-for="fruit in fruits.filter((item) => item.includes('a'))" :key="fruit">{{ fruit }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
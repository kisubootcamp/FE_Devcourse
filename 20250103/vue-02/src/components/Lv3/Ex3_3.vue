<script>
export default {
  name: 'Ex3_3',
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 3번</h2>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ index }} - {{ item }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
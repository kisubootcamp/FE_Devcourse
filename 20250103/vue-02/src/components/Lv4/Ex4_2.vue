<script>
export default {
  name: 'Ex4_2',
  data() {
    return {
      products: [
        { name: '노트북', price: 100000 },
        { name: '모니터', price: 45000 },
        { name: '스마트폰', price: 60000 }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv4 - 2번</h2>
  <ul>
    <li v-for="product in products.filter((item) => item.price >= 50000)" :key="product.name">{{ product.name }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
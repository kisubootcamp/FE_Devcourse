<script>
export default {
  name: 'ex3_6',
  data() {
    return {
      cars: [
        { model: 'Tesla Model S', price: 79999 },
        { model: 'BMW X5', price: 60999 },
        { model: 'Audi Q7', price: 54999 }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv3 - 6번</h2>
  <ul>
    <li v-for="car in cars" :key="car.model">{{ car.model }} - {{ car.price }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
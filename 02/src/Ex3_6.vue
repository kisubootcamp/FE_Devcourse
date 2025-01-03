<script>
export default {
  name: "Ex3_6",
  data() {
    return {
      cars: [
        { model: "Tesla Model S", price: 79999 },
        { model: "BMW X5", price: 60999 },
        { model: "Audi Q7", price: 54999 },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(car, index) in cars" :key="index">
      {{ car.model }} - {{ car.price }}원
    </li>
  </ul>
</template>
<style></style>

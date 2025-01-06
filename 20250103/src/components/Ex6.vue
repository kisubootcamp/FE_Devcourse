<script>
export default {
  name: "Ex6",
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
  <h2>문제6</h2>
  <ul>
    <li v-for="(value, index) in cars" :key="index">
      모델: {{ value.model }} 가격: {{ value.price }}
    </li>
  </ul>
</template>
<style scoped></style>

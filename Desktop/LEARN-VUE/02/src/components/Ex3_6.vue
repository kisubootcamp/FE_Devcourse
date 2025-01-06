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
  <h2 v-for="(value, index) in cars" :key="index">
    {{ value.model }} : {{ value.price }}
  </h2>
</template>
<style scoped></style>

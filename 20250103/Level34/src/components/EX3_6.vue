<script>
export default {
  name: "EX3_6",
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
  <h3 v-for="cars in cars">{{ cars.model }} : {{ cars.price }}</h3>
</template>
<style scoped></style>

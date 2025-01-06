<script>
export default {
  name: "EX4_2",
  data() {
    return {
      products: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
    };
  },
};
</script>
<template>
  <h3 v-for="product in products.filter((product) => product.price >= 50000)">
    {{ product.name }} : {{ product.price }}
  </h3>
</template>
<style scoped></style>

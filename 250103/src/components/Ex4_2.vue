<script>
export default {
  name: "Ex4_2",
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
  <ul>
    <li
      v-for="(product, index) in products.filter(
        (product) => product.price >= 50000
      )"
      :key="index"
    >
      {{ product.name }} - {{ product.price }}
    </li>
  </ul>
</template>
<style scoped></style>

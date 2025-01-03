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
    <template v-for="(val, index) in products.filter((i) => i.price >= 50000)">
      <li>{{ val.name }}</li>
    </template>
  </ul>
</template>
<style scoped></style>

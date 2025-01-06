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
  <div>
    <h1
      v-for="(item, index) in products.filter(
        (product) => product.price > 50000
      )"
      :key="index"
    >
      이름: {{ item.name }}, 가격: {{ item.price }}
    </h1>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "Ex12",
  data() {
    return {
      items: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
    };
  },
};
</script>
<template>
  <h2>Level4 - 문제2</h2>
  <ul>
    <li
      v-for="(value, index) in items.filter((item) => item.price > 50000)"
      :key="index"
    >
      {{ value.name }} {{ value.price }}
    </li>
  </ul>
</template>
<style scoped></style>

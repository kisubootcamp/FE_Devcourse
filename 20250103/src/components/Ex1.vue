<script>
export default {
  name: "Ex1",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>
<template>
  <h2>문제1</h2>
  <ul>
    <li v-for="(value, index) in items" :key="index">
      {{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

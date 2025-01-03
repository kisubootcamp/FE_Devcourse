<script>
export default {
  name: "Ex9",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <h2>문제9</h2>
  <ul>
    <li v-for="(value, index) in items" :key="index">
      <strong>{{ value }}</strong>
    </li>
  </ul>
</template>
<style scoped></style>

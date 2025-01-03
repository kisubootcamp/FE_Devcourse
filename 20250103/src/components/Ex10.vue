<script>
export default {
  name: "Ex10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <h2>문제10</h2>
  <ul>
    <li v-for="(value, index) in items" :key="index">
      {{ value }} {{ value.length }}
    </li>
  </ul>
</template>
<style scoped></style>

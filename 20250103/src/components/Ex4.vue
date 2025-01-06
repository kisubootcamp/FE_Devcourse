<script>
export default {
  name: "Ex4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <h2>문제4</h2>
  <ul>
    <li
      v-for="(value, index) in fruits.filter((item) => item.includes('a'))"
      :key="index"
    >
      {{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

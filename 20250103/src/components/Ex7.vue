<script>
export default {
  name: "Ex7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <h2>문제7</h2>
  <ul>
    <li
      v-for="(value, index) in fruits"
      :key="index"
      :style="value === 'Apple' ? 'color:red' : 'color:green'"
    >
      {{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

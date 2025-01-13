<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello",
      foods: ["apple", "banana", "orange"],
    };
  },
};
</script>
<template>
  <ul>
    <li>{{ foods[0] }}</li>
    <li>{{ foods[1] }}</li>
    <li>{{ foods[2] }}</li>
  </ul>
  <hr />
  <ul>
    <!-- for..in -->
    <li v-for="(value, index) in foods" :key="index">
      {{ index }} - {{ value }}
    </li>
  </ul>
</template>
<style scoped>
[v-cloak] {
  display: none;
}
</style>

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
  <ul>
    <template v-for="(fruit, index) in fruits" :key="index">
      <li v-if="fruit.includes('a')">{{ fruit }}</li>
    </template>
  </ul>
</template>
<style scoped></style>

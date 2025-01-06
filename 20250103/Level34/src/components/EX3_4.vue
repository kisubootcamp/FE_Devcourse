<script>
export default {
  name: "EX3_4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <template v-for="fruit in fruits">
    <h3 v-if="fruit.includes('a')">{{ fruit }}</h3>
  </template>
</template>
<style scoped></style>

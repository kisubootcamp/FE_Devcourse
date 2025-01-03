<script>
export default {
  name: "EX4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <h1 v-for="(items, index) in fruits" :key="index">
    <h2 v-if="items.toLowerCase().includes('a')">{{ items }}</h2>
  </h1>
</template>
<style scoped></style>

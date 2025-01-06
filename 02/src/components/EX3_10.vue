<script>
export default {
  name: "EX3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <h1 v-for="(value, index) in items" :key="index">
    {{ value.length }}
  </h1>
</template>
<style scoped></style>

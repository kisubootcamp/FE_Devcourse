<script>
export default {
  name: "Ex3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <p v-for="(value, index) in items" :key="index">
    {{ value }}: {{ value.length }}
  </p>
</template>
<style scoped></style>

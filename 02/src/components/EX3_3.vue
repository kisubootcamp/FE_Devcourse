<script>
export default {
  name: "EX3_3",
  data() {
    return {
      items: ["Apple", "Banana", "Cherry"],
    };
  },
};
</script>
<template>
  <ul v-for="(fruits, index) in items" :key="index">
    <li>{{ fruits }}</li>
  </ul>
</template>
<style scoped></style>

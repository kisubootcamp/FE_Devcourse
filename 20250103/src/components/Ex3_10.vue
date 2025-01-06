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
  <ul>
    <li v-for="(val, ind) in items">{{ val }} {{ val.length }}</li>
  </ul>
</template>
<style scoped></style>

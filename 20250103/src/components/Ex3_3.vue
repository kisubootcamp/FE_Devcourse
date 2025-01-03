<script>
export default {
  name: "Ex3_3",
  data() {
    return {
      items: ["Apple", "Banana", "Cherry"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(val, index) in items">{{ index }} - {{ val }}</li>
  </ul>
</template>
<style scoped></style>

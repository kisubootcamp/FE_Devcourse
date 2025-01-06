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
    <li v-for="(item, key) in items" :key>{{ key }} - {{ item }}</li>
  </ul>
</template>
<style scoped></style>

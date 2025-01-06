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
    <li v-for="(value, index) in items">{{ index }} - {{ value }}</li>
  </ul>
</template>
<style></style>

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
  <h3 v-for="(value, index) in items">{{ index }} : {{ value }}</h3>
</template>
<style scoped></style>

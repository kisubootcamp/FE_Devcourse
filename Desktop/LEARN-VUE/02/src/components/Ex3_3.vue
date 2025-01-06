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
  <p v-for="(value, index) in items" :key="index">{{ index }} = {{ value }}</p>
</template>
<style scoped></style>

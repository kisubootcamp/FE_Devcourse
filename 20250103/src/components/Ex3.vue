<script>
export default {
  name: "Ex3",
  data() {
    return {
      items: ["Apple", "Banana", "Cherry"],
    };
  },
};
</script>
<template>
  <h2>문제3</h2>
  <ul>
    <li v-for="(_, index) in items" :key="index">
      {{ index }}
    </li>
  </ul>
</template>
<style scoped></style>

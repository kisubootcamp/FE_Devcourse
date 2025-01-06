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
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}- {{ index }}</li>
  </ul>
</template>
<style scoped></style>

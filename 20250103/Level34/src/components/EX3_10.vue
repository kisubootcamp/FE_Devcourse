<script>
export default {
  name: "EX3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <h3 v-for="item in items">{{ item }} : {{ item.length }}</h3>
</template>
<style scoped></style>

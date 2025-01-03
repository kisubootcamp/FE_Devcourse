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
  <ul>
    <li v-for="(item, index) in items">{{ index }} - {{ item }}</li>
  </ul>
</template>
<style></style>

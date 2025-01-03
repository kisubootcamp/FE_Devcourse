<script>
export default {
  name: "EX3_4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="fruit in fruits">
      <li v-if="fruit.includes('a')">{{ fruit }}</li>
    </template>
  </ul>
</template>
<style></style>

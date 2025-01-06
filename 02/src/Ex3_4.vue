<script>
export default {
  name: "Ex3_4",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="(value, index) in fruits" :key="index">
      <li v-if="value.includes('a')">{{ value }}</li>
    </template>
  </ul>
</template>
<style></style>

<script>
export default {
  name: "Ex3_7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <div v-for="(fruit, key) in fruits" :key>
    <template v-if="fruit === 'Apple'">
      <div style="color: red">{{ fruit }}</div>
    </template>
    <template v-else>
      <div style="color: green">{{ fruit }}</div>
    </template>
  </div>
</template>
<style scoped></style>

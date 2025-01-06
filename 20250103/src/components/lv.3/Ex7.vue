<script>
export default {
  name: "Ex7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      <span v-if="fruit === 'Apple'" style="color: red">{{ fruit }}</span>
      <span v-else style="color: green">{{ fruit }}</span>
    </li>
  </ul>
</template>
<style scoped></style>

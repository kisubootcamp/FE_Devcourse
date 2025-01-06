<script>
export default {
  name: "Ex7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
      color1: "red",
      color2: "green",
    };
  },
};
</script>
<template>
  <ul>
    <li
      v-for="(fruit, index) in fruits"
      :key="index"
      :style="{ color: fruit === 'Apple' ? color1 : color2 }"
    >
      {{ fruit }}
    </li>
  </ul>
</template>
<style scoped></style>

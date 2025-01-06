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
    <li
      v-for="(value, index) in fruits.filter((value) => value.includes('a'))"
      :key="index"
    >
      {{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

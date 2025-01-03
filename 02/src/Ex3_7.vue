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
  <ul>
    <li
      v-for="(fruit, index) in fruits"
      :key="index"
      :style="{ color: fruit === 'Apple' ? 'red' : 'green' }">
      {{ fruit }}
    </li>
  </ul>
</template>
<style></style>

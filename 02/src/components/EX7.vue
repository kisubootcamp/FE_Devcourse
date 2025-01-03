<script>
export default {
  name: "EX7",
  data() {
    return {
      fruits: ["Apple", "Banana", "Grapes"],
    };
  },
};
</script>
<template>
  <ul
    v-for="(items, index) in fruits"
    :key="index"
    :style="{ color: index === 0 ? 'red' : 'green' }"
  >
    <li>
      {{ items }}
    </li>
  </ul>
</template>
<style scoped></style>

<script>
export default {
  name: "EX9",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <ul
    v-for="(value, index) in items"
    :key="index"
    :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
  >
    <li>
      {{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

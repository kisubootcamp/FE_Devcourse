<script>
export default {
  name: "Ex9",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<style scoped></style>

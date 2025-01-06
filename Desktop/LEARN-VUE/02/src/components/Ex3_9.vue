<script>
export default {
  name: "Ex3_9",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <p
    v-for="(value, index) in items"
    :key="index"
    :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
  >
    {{ value }}
  </p>
</template>
<style scoped></style>

<script>
export default {
  name: "EX3_9",
  data() {
    return {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="(item, index) in items">
      <li :style="index === 0 && { fontWeight: 'bold' }">{{ item }}</li>
    </template>
  </ul>
</template>
<style></style>

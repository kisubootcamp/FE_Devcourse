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
  <div v-for="(item, key) in items" :key>
    <template v-if="key === 0">
      <strong>{{ item }}</strong>
    </template>
    <template v-else>
      <div>{{ item }}</div>
    </template>
  </div>
</template>
<style scoped></style>

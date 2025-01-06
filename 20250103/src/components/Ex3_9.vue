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
  <ul>
    <template v-for="(val, index) in items">
      <li :style="{ fontWeight: index === 0 ? 'bolder ' : 'none' }">
        {{ val }}
      </li>
    </template>
  </ul>
</template>
<style scoped></style>

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
    <li
      v-for="(item, index) in items"
      :key="index"
      :style="{ fontWeight: index === 0 ? 700 : 400 }">
      {{ item }}
    </li>
  </ul>
</template>
<style></style>

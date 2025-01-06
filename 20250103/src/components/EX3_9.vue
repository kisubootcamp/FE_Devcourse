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
  <div>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :style="{ fontWeight: index === 0 ? 'bold' : 'normal' }"
      >
        {{ index }} - {{ item }}
      </li>
    </ul>
  </div>
</template>
<style></style>

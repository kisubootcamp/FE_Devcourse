<script>
export default {
  name: "EX3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <ul>
    <p>item 개수: {{ items.length }}</p>
    <template v-for="item in items">
      <li>{{ item }}</li>
    </template>
  </ul>
</template>
<style></style>

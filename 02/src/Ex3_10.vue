<script>
export default {
  name: "Ex3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }} - {{ item.length }}
    </li>
  </ul>
</template>
<style></style>

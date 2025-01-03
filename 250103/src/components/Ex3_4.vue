<script>
export default {
  name: "Ex3_4",
  data() {
    return {
      items: ["Apple", "Banana", "Orange", "Grapes"],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="(item, index) in items" :key="index">
      <li v-if="item.includes('a')">{{ item }}</li>
    </template>
  </ul>
</template>

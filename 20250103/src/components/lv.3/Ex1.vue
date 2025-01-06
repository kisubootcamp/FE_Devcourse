<script>
export default {
  name: "Ex1",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>
<style scoped></style>

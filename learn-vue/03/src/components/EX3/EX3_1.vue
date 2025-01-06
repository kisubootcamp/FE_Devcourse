<script>
export default {
  name: "EX3_1",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>
<style></style>

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
  <h3 v-for="item in items">{{ item }}</h3>
</template>
<style scoped></style>

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
  <h1 v-for="(fruits, index) in items" :key="index">{{ fruits }}</h1>
</template>
<style scoped></style>

<script>
export default {
  name: "Ex3_1",
  data() {
    return {
      items: ["사과", "바나나", "오렌지"],
    };
  },
};
</script>
<template>
  <p v-for="(value, index) in items" :key="index">{{ value }}</p>
</template>
<style scoped></style>

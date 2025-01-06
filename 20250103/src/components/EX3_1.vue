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
  <div>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<style></style>

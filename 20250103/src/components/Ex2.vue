<script>
export default {
  name: "Ex2",
  data() {
    return {
      person: { name: "홍길동", age: 25, job: "개발자" },
    };
  },
};
</script>
<template>
  <h2>문제2</h2>
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ key + "-" + value }}</li>
  </ul>
</template>
<style scoped></style>

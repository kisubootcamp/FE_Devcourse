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
  <ul>
    <li v-for="(value, key) in person" :key="key">
      <span>{{ key }} - {{ value }}</span>
    </li>
  </ul>
</template>
<style scoped></style>

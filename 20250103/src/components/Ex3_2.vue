<script>
export default {
  name: "Ex3_2",
  data() {
    return {
      person: { name: "홍길동", age: 25, job: "개발자" },
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(val, key) in person">{{ key }} - {{ val }}</li>
  </ul>
</template>
<style scoped></style>

<script>
export default {
  name: "EX3_2",
  data() {
    return {
      person: { name: "홍길동", age: 25, job: "개발자" },
    };
  },
};
</script>
<template>
  <h3 v-for="(value, key) in person">{{ key }} : {{ value }}</h3>
</template>
<style scoped></style>

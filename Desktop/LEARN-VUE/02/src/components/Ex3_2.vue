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
  <p v-for="(value, key) in person" :key="key">{{ key }} = {{ value }}</p>
</template>
<style scoped></style>

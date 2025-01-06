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
  <ul>
    <li v-for="(value, index) in person">{{ index }} - {{ value }}</li>
  </ul>
</template>
<style></style>

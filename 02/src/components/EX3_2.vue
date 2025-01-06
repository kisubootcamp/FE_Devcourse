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
  <ul v-for="(individual, index) in person" :key="index">
    {{
      key
    }}
    {{
      individual
    }}
  </ul>
</template>
<style scoped></style>

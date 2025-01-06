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
  <div>
    <ul>
      <li v-for="(value, key) in person" :key="key">{{ key }} : {{ value }}</li>
    </ul>
  </div>
</template>
<style></style>

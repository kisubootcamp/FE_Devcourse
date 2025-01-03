<script>
export default {
  name: "Ex4_1",
  data() {
    return {
      students: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 22 },
      ],
    };
  },
};
</script>
<template>
  <ul>
    <template v-for="(val, index) in students.sort((a, b) => b.age - a.age)">
      <li>{{ val.name }} - {{ val.age }}</li>
    </template>
  </ul>
</template>
<style scoped></style>

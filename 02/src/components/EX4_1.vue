<script>
export default {
  name: "EX4_1",
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
    <template
      v-for="(student, index) in students.slice().sort((a, b) => a.age - b.age)"
      :key="index"
    >
      <li>이름: {{ student.name }}, 나이: {{ student.age }}</li>
    </template>
  </ul>
</template>
<style scoped></style>

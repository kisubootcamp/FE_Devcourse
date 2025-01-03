<script>
export default {
  name: "Ex1",
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
    <li
      v-for="(student, index) in students.sort((a, b) => b.age - a.age)"
      :key="index"
    >
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
</template>
<style scoped></style>

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
    <li v-for="student in students.sort((a, b) => a.age - b.age)">
      {{ student.name }} - {{ student.age }}
    </li>
  </ul>
</template>
<style></style>

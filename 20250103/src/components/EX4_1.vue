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
  <div>
    <ul>
      <li
        v-for="(student, index) in students.sort((a, b) => a.age - b.age)"
        :key="index"
      >
        {{ index }} - {{ student.name }} ({{ student.age }})
      </li>
    </ul>
  </div>
</template>
<style></style>

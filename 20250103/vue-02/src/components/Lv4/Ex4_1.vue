<script>
export default {
  name: 'Ex4_1',
  data() {
    return {
      students: [
        { name: '홍길동', age: 20 },
        { name: '김철수', age: 25 },
        { name: '이영희', age: 22 }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv4 - 1번</h2>
  <ul>
    <li v-for="student in students.sort((a, b) => a.age - b.age)" :key="student.name">{{ student.name }} - {{ student.age }}</li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
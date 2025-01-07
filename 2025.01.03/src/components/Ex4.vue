<script>
export default {
  name: "Ex4",
  data() {
    return {
      students: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 22 },
      ],
      products: [
        { name: "노트북", price: 100000 },
        { name: "모니터", price: 45000 },
        { name: "스마트폰", price: 60000 },
      ],
    };
  },
};
</script>
<template>
  <!-- 연습문제 1 -->
  <ul>
    <li
      v-for="student in students.sort((a, b) => a.age - b.age)"
      :key="student"
    >
      {{ student.name }}, {{ student.age }}
    </li>
  </ul>

  <!-- 연습문제 2 -->
  <ul>
    <li
      v-for="product in products.filter((products.price) => product.price > 50000 )"
      :key="product"
    >
      {{ product }}
    </li>
  </ul>
</template>
<style scoped></style>

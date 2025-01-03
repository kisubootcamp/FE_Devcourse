<script>
export default {
  name: "Ex11",
  data() {
    return {
      items: [
        { name: "홍길동", age: 20 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 22 },
      ],
    };
  },
};
</script>
<template>
  <h2>Level4 - 문제1</h2>
  <ul>
    <li
      v-for="(value, index) in items.sort((a, b) => b.age - a.age)"
      :key="index"
    >
      {{ value.name }} {{ value.age }}
    </li>
  </ul>
</template>
<style scoped></style>

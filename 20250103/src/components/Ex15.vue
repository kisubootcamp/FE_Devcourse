<script>
export default {
  name: "Ex15",
  data() {
    return {
      teamMembers: [
        { name: "홍길동", role: "개발자" },
        { name: "김철수", role: "디자이너" },
        { name: "이영희", role: "개발자" },
        { name: "박지민", role: "기획자" },
      ],
    };
  },
};
</script>
<template>
  <h2>Level4 - 문제5</h2>
  <h3>개발자</h3>
  <ul>
    <li
      v-for="(value, index) in teamMembers.filter(
        (items) => items.role === '개발자'
      )"
      :key="index"
    >
      {{ value.name }}
    </li>
  </ul>
  <h3>디자이너</h3>
  <ul>
    <li
      v-for="(value, index) in teamMembers.filter(
        (items) => items.role === '디자이너'
      )"
      :key="index"
    >
      {{ value.name }}
    </li>
  </ul>
  <h3>기획자</h3>
  <ul>
    <li
      v-for="(value, index) in teamMembers.filter(
        (items) => items.role === '기획자'
      )"
      :key="index"
    >
      {{ value.name }}
    </li>
  </ul>
</template>
<style scoped></style>

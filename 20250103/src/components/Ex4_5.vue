<script>
export default {
  name: "Ex4_5",
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
  <ul>
    <h1>개발자</h1>
    <template v-for="val in teamMembers">
      <li v-if="val.role === '개발자'">{{ val.name }}</li>
    </template>
    <h1>디자이너</h1>
    <template v-for="val in teamMembers">
      <li v-if="val.role === '디자이너'">{{ val.name }}</li>
    </template>
    <h1>기획자</h1>
    <template v-for="val in teamMembers">
      <li v-if="val.role === '기획자'">{{ val.name }}</li>
    </template>
  </ul>
</template>
<style scoped></style>

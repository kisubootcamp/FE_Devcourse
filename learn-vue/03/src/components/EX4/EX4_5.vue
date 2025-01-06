<script>
export default {
  name: "EX4_5",
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
  <h3>개발자</h3>
  <ul>
    <li v-for="teamMember in teamMembers.filter((member) => member.role === '개발자')">
      {{ teamMember.name }}
    </li>
  </ul>
  <h3>디자이너</h3>
  <ul>
    <li v-for="teamMember in teamMembers.filter((member) => member.role === '디자이너')">
      {{ teamMember.name }}
    </li>
  </ul>
  <h3>기획자</h3>
  <ul>
    <li v-for="teamMember in teamMembers.filter((member) => member.role === '기획자')">
      {{ teamMember.name }}
    </li>
  </ul>
</template>
<style></style>

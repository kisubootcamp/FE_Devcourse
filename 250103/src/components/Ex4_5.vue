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
    <li
      v-for="(members, key) in teamMembers.reduce((acc, member) => {
        if (!acc[member.role]) {
          acc[member.role] = [];
        }
        acc[member.role].push(member);
        return acc;
      }, {})"
      :key="key"
    >
      <h3>{{ key }}</h3>
      <ul>
        <li v-for="(member, index) in members" :key="index">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>

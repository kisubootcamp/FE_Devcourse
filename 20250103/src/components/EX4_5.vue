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
  <div>
    <div
      v-for="(members, role) in teamMembers.reduce((group, member) => {
        group[member.role] = group[member.role] || [];
        group[member.role].push(member);
        return group;
      }, {})"
      :key="role"
    >
      <h2>{{ role }}</h2>
      <ul>
        <li v-for="member in members" :key="member.name">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style></style>

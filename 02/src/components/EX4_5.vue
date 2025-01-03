<script>
export default {
  name: "App",
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
      v-for="(role, index) in [
        ...new Set(teamMembers.map((member) => member.role)),
      ]"
      :key="index"
    >
      <h3>{{ role }}</h3>
      <ul>
        <li
          v-for="(member, index) in teamMembers.filter(
            (member) => member.role === role
          )"
          :key="index"
        >
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

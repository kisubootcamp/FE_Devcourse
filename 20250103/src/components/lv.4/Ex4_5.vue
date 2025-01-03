<script>
export default {
  name: "Ex5",
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
      v-for="(members, key) in teamMembers.reduce((pre, cur) => {
        if (!pre[cur.role]) {
          pre[cur.role] = [];
        }
        pre[cur.role].push(cur);
        return pre;
      }, {})"
      :key="key"
    >
      {{ key }}
      <ul>
        <li v-for="(member, index) in members" :key="index">
          {{ member.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
~

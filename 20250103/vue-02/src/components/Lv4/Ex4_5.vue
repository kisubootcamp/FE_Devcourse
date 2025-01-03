<script>
export default {
  name: 'Ex4_5',
  data() {
    return {
      teamMembers: [
        { name: '홍길동', role: '개발자' },
        { name: '김철수', role: '디자이너' },
        { name: '이영희', role: '개발자' },
        { name: '박지민', role: '기획자' }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv4 - 5번</h2>
  <div v-for="role in [...new Set(teamMembers.map((member) => member.role))]" :key="role">
    <h3>{{ role }}</h3>
    <ul>
      <li v-for="member in teamMembers.filter((teamMember) => teamMember.role === role)" :key="member.name">
        {{ member.name }}
      </li>
    </ul>
  </div>
  <hr/>
</template>
<style scoped>
  
</style>
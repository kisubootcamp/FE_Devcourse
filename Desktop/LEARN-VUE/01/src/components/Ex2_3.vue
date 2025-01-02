<script>
export default {
  name: "Ex2_3",
  data() {
    return {
      admin: "admin",
    };
  },
};
</script>
<template>
  <ul>
    <li v-if="admin === 'admin'">관리자</li>
    <li v-else-if="admin === 'editor'">편집자</li>
    <li v-else-if="admin === 'viewer'">읽기 전용</li>
  </ul>
</template>
<style scoped></style>

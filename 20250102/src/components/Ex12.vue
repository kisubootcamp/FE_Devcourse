<script>
export default {
  name: "Ex12",
  data() {
    return {
      role: "admin",
    };
  },
};
</script>
<template>
  <h2>3. 다중 상태에 따른 렌더링</h2>
  <p v-if="role === 'admin'">관리자 메뉴</p>
  <p v-else-if="role === 'editor'">편집자 메뉴</p>
  <p v-else-if="role === 'viewer'">읽기 전용 메뉴</p>
</template>

<style scoped></style>

<script>
export default {
  name: "Ex2_3",
  data() {
    return {
      state: "editor", // "admin", "editor", "viewer"
    };
  },
};
</script>
<template>
  <div v-if="state === 'admin'">관리자 메뉴를 표시</div>
  <div v-else-if="state === 'editor'">편집자 메뉴를 표시</div>
  <div v-else-if="state === 'viewer'">읽기 전용 메뉴를 표시</div>
</template>
<style scoped></style>

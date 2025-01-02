<script>
export default {
  name: "Ex3",
  data() {
    return {
      auth: "admin",
    };
  },
};
</script>
<template>
  <p v-if="auth === 'admin'">관리자메뉴</p>
  <p v-else-if="auth === 'editor'">편집자메뉴</p>
  <p v-else>읽기전용메뉴</p>
</template>
<style scoped></style>

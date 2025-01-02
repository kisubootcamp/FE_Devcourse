<script>
export default {
  name: "Lv2Ex3",
  data() {
    return {
      role: "admin",
    };
  },
};
</script>
<template>
  <p v-if="role === 'admin'">관리자 메뉴</p>
  <p v-else-if="role === 'editor'">편집자 메뉴</p>
  <p v-else>읽기 전용 메뉴</p>
</template>
<style scoped></style>

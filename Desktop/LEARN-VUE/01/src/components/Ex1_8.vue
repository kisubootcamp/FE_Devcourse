<script>
export default {
  name: "Ex1_8",
  data() {
    return {
      auth: "로그인 중",
    };
  },
};
</script>
<template>
  <p v-if="auth === '로그인 중'">로그인 중</p>
  <p v-if="auth === '로그인 필요'">로그인 필요</p>
  <p v-if="auth === '비밀번호 오류'">비밀번호 오류</p>
</template>
<style scoped></style>

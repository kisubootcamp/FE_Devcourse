<script>
export default {
  name: "EX8",
  data() {
    return {
      isLogging: true,
      RequiredLogin: true,
      PasswordError: true,
    };
  },
};
</script>
<template>
  <h1 v-if="!isLogging">로그인 중</h1>
  <h1 v-else-if="!RequiredLogin">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
<style scoped></style>

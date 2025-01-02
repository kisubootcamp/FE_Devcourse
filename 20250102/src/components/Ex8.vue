<script>
export default {
  name: "Ex8",
  data() {
    return {
      isLogin: "passwordError",
    };
  },
};
</script>
<template>
  <p v-if="isLogin === 'login'">로그인 중</p>
  <p v-else-if="isLogin === 'noLogin'">로그인 필요</p>
  <p v-else>비밀번호 오류</p>
</template>
<style scoped></style>

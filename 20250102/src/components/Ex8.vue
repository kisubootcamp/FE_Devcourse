<script>
export default {
  name: "Ex8",
  data() {
    return {
      status: "loggedIn",
    };
  },
};
</script>
<template>
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loggedRequired'">로그인 필요</h1>
  <h1 v-else-if="status === 'error'">비밀번호 오류</h1>
</template>
<style scoped></style>

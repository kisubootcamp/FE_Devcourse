<script>
export default {
  name: "Lv2Ex4",
  data() {
    return {
      status: "loggedIn",
      account: "basic",
    };
  },
};
</script>
<template>
  <h1 v-if="status === 'loggedIn' && account === 'basic'">
    기본 계정으로 로그인 중
  </h1>
  <h1 v-else-if="status === 'loggedIn' && account === 'premium'">
    프리미엄 계정으로 로그인 중
  </h1>
  <h1 v-else-if="status === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="status === 'banned'">계정 정지</h1>
</template>
<style scoped></style>

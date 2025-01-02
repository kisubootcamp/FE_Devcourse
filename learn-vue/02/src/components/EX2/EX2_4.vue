<script>
export default {
  name: "EX2_4",
  data() {
    return {
      state: "loggedIn",
      account: "basic",
    };
  },
};
</script>
<template>
  <p v-if="state === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</p>
  <p v-else-if="state === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</p>
  <p v-else-if="state === 'loggedOut'">로그인 필요</p>
  <p v-else-if="state === 'banned'">계정 정지</p>
</template>
<style></style>

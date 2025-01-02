<script>
export default {
  name: "Ex4",
  data() {
    return {
      state: "loggedIn",
      type: "basic",
    };
  },
};
</script>
<template>
  <p v-if="state === 'loggedIn' && type === 'basic'">기본 계정으로 로그인 중</p>
  <p v-else-if="state === 'loggedIn' && type === 'premium'">
    프리미엄 계정으로 로그인 중
  </p>
  <p v-else-if="state === 'loggedOut'">로그인 필요</p>
  <p v-else-if="state === 'banned'">계정 정지</p>
</template>
<style scoped></style>

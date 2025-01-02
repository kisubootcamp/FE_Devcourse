<script>
export default {
  name: "Ex13",
  data() {
    return {
      status: "loggedIn",
      account: "basic",
    };
  },
};
</script>
<template>
  <h2>4. 복잡한 다중 조건부 렌더링</h2>
  <p v-if="status === 'loggedIn' && account === 'basic'">
    기본 계정으로 로그인 중
  </p>
  <p v-else-if="status === 'loggedIn' && account === 'premium'">
    프리미엄 계정으로 로그인 중
  </p>
  <p v-else-if="status === 'loggedOut'">로그인 필요</p>
  <p v-else-if="status === 'banned'">계정정지</p>
</template>

<style scoped></style>

<script>
export default {
  name: "Ex2_4",
  data() {
    return {
      isLoggedIn: "banned",
      accountType: "premium",
    };
  },
};
</script>
<template>
  <div>
    <div v-if="isLoggedIn === 'loggedIn'">
      <p v-if="accountType === 'basic'">기본 계정으로 로그인 중</p>
      <p v-else-if="accountType === 'premium'">프리미엄 계정으로 로그인 중</p>
    </div>
    <div v-else-if="isLoggedIn === 'loggedOut'">로그인 필요</div>
    <div v-else>계정 정지</div>
  </div>
</template>
<style></style>

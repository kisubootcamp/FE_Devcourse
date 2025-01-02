<script>
export default {
  name: "Ex2_4",
  data() {
    return {
      status: "loggedIn",
      adminType: "basic",
    };
  },
};
</script>
<template>
  <p v-if="status === 'loggedIn' && adminType === 'basic'">
    "기본 계정으로 로그인 중"
  </p>
  <p v-else-if="status === 'loggedIn' && adminType === 'premium'">
    "프리미엄 계정으로 로그인 중"
  </p>
  <p v-else-if="status === 'loggedOut'">"로그인 필요"</p>
  <p v-else-if="status === 'banned'">"계정 정지"</p>
</template>
<style scoped></style>

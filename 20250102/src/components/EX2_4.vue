<script>
export default {
  name: "EX2_4",
  data() {
    return {
      status: "loggedIn",
      accountType: "basic",
    };
  },
};
</script>

<template>
  <div>
    <p v-if="status === 'loggedIn' && accountType === 'basic'">
      기본 계정으로 로그인 중
    </p>
    <p v-else-if="status === 'loggedIn' && accountType === 'premium'">
      프리미엄 계정으로 로그인 중
    </p>
    <p v-else-if="status === 'loggedOut'">로그인 필요</p>
    <p v-else>계정 정지</p>
  </div>
</template>

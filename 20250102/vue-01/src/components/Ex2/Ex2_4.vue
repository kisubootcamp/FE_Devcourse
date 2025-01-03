<script>
export default {
  name: 'Ex2_4',
  data() {
    return {
      status: 'loggedIn',
      role: 'basic'
    };
  },
};
</script>
<template>
  <h2>Lv2. 4번</h2>

  <p v-if="status === 'loggedIn' && role === 'basic'">기본 계정으로 로그인 중</p>
  <p v-else-if="status === 'loggedIn' && role === 'premium'">프리미엄 계정으로 로그인 중</p>
  <p v-else-if="status === 'loggedOut'">로그인 필요</p>
  <p v-if="status === 'banned'">계정 정지</p>

  <hr />
</template>
<style scoped>
  
</style>
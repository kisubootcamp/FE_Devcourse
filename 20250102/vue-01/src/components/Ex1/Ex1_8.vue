<script>
export default {
  name: 'Ex1_8',
  data() {
    return {
      state: 'login-need'
    };
  },
};
</script>
<template>
  <h2>Lv1. 8번</h2>

  <p v-if="state === 'login-ing'">로그인 중</p>
  <p v-else-if="state === 'login-need'">로그인 필요</p>
  <p v-else>로그인 오류</p>

  <hr />
</template>
<style scoped>
  
</style>
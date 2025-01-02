<script>
export default {
  name: "LoginStatus",
  data() {
    return {
      status: "loggedOut",
    };
  },
};
</script>

<template>
  <div>
    <button @click="status = 'loggingIn'">로그인 중</button>
    <button @click="status = 'loggedOut'">로그인 필요</button>
    <button @click="status = 'passwordError'">비밀번호 오류</button>

    <p v-if="status === 'loggingIn'">로그인 중</p>
    <p v-else-if="status === 'loggedOut'">로그인이 필요</p>
    <p v-else-if="status === 'passwordError'">비밀번호 오류</p>
  </div>
</template>

<script>
export default {
  name: "EX1_8",
  data() {
    return {
      errorState: "0",
    };
  },
};
</script>
<template>
  <p v-if="errorState === '0'">로그인 중</p>
  <p v-else-if="errorState === '1'">로그인 필요</p>
  <p v-else>비밀번호 오류</p>
</template>
<style></style>

<script>
export default {
  name: "Ex1_8",
  data() {
    return {
      state: 0,
    };
  },
};
</script>
<template>
  <div v-if="state === 0">로그인 중</div>
  <div v-else-if="state === 1">로그인 필요</div>
  <div v-else>비밀번호 오류</div>
</template>
<style scoped></style>

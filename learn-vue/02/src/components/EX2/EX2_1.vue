<script>
export default {
  name: "EX2_1",
  data() {
    return {
      state: "loading",
    };
  },
};
</script>
<template>
  <p v-if="state === 'loading'">데이터를 로딩 중입니다...</p>
  <p v-if="state === 'error'">에러가 발생했습니다.</p>
  <p v-if="state === 'success'">데이터 로딩 완료!</p>
  <p v-if="state === 'idle'">대기 중</p>
</template>
<style></style>

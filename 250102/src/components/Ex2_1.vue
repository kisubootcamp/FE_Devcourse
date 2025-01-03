<script>
export default {
  name: "Ex2_1",
  data() {
    return {
      state: "error", // "loading", "error", "success", "idle"
    };
  },
};
</script>
<template>
  <div v-if="state === 'loading'">데이터를 로딩 중입니다...</div>
  <div v-else-if="state === 'error'">에러가 발생했습니다.</div>
  <div v-else-if="state === 'success'">데이터 로딩 완료!</div>
  <div v-else-if="state === 'idle'">대기 중</div>
</template>
<style scoped></style>

<script>
export default {
  name: "lv2Ex1",
  data() {
    return {
      status: "loading",
    };
  },
};
</script>
<template>
  <p v-if="status === 'loading'">데이터를 로딩 중입니다...</p>
  <p v-else-if="status === 'error'">에러가 발생했습니다.</p>
  <p v-else-if="status === 'success'">데이터 로딩완료</p>
  <p v-else>대기 중</p>
</template>
<style scoped></style>

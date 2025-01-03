<!-- lv.2 -->

<script>
export default {
  name: "Ex10",
  data() {
    return {
      status: "loading",
    };
  },
};
</script>
<template>
  <h1 v-if="status === 'loading'">로딩중...</h1>
  <h1 v-else-if="status === 'error'">에러!!</h1>
  <h1 v-else-if="status === 'success'">로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중</h1>
</template>
<style scoped></style>

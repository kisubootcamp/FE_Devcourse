<script>
export default {
  name: "Ex1",
  data() {
    return {
      state: "loading",
    };
  },
};
</script>
<template>
  <p v-if="state === 'loading'">데이터를 로딩 중입니다...</p>
  <p v-else-if="state === 'success'">데이터 로딩이 완료되었습니다!</p>
  <p v-else-if="state === 'error'">데이터 로딩 중 오류가 발생했습니다.</p>


</template>
<style scoped></style>

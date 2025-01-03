<script>
export default {
  name: 'Ex2_1',
  data() {
    return {
      status: "loading"
    };
  },
};
</script>
<template>
  <h2>Lv2. 1번</h2>

  <p v-if="status==='loading'">데이터를 로딩 중입니다...</p>
  <p v-else-if="status==='error'">에러가 발생했습니다.</p>
  <p v-else-if="status==='success'">데이터 로딩 완료!</p>
  <p v-else-if="status==='idle'">대기 중</p>

  <hr />
</template>
<style scoped>
  
</style>
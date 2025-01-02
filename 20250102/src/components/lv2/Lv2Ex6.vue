<script>
export default {
  name: "Lv2Ex6",
  data() {
    return {
      status: "inCart",
    };
  },
};
</script>
<template>
  <h1 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status === 'purchased'">구매완료</h1>
  <h1 v-else>구매가 취소되었습니다.</h1>
</template>
<style scoped></style>

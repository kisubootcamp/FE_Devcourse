<script>
export default {
  name: "Ex15",
  data() {
    return {
      status: "inCart",
    };
  },
};
</script>
<template>
  <h2>6. 복잡한 상태 관리와 v-if, v-else-if 사용</h2>
  <p v-if="status === 'inCart'">장바구니에 상품이 있습니다</p>
  <p v-else-if="status === 'purchased'">구매 완료</p>
  <p v-else-if="selestatusctedOpt === 'abandoned'">구매가 취소되었습니다</p>
</template>

<style scoped></style>

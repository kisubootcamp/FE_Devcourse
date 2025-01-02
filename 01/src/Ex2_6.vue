<script>
export default {
  name: "Ex2_6",
  data() {
    return {
      status: "purchased",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="status === 'inCart'">장바구니에 상품이 있습니다.</p>
    <p v-if="status === 'purchased'">구매 완료</p>
    <p v-if="status === 'abandoned'">구매가 취소되었습니다</p>
  </div>
</template>
<style></style>

<script>
export default {
  name: "EX2_6",
  data() {
    return {
      state: "inCart",
    };
  },
};
</script>
<template>
  <p v-if="state === 'inCart'">장바구니에 상품이 있습니다.</p>
  <p v-else-if="state === 'purchased'">구매 완료</p>
  <p v-else-if="state === 'abandoned'">구매가 취소되었습니다</p>
</template>
<style></style>

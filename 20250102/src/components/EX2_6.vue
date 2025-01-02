<script>
export default {
  name: "EX2_6",
  data() {
    return {
      purchaseState: "inCart",
    };
  },
};
</script>

<template>
  <div>
    <p v-if="purchaseState === 'inCart'">장바구니에 상품이 있습니다.</p>
    <p v-else-if="purchaseState === 'purchased'">구매 완료</p>
    <p v-else>구매가 취소되었습니다</p>
  </div>
</template>

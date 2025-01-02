<script>
export default {
  name: 'Ex2_6',
  data() {
    return {
      status: 'inCart'
    };
  },
};
</script>
<template>
  <h2>Lv2. 6번</h2>

  <p v-if="status === 'inCart'">장바구니에 상품이 있습니다.</p>
  <p v-else-if="status === 'purchased'">구매 완료</p>
  <p v-else-if="status === 'abandoned'">구매가 취소되었습니다.</p>

  <hr />
</template>
<style scoped>
  
</style>
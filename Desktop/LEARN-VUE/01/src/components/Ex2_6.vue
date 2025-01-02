<script>
export default {
  name: "Ex2_6",
  data() {
    return {
      status: "inCart",
      options: {
        inCart: "장바구니에 상품이 있습니다.",
        purchased: "구매 완료",
        abandoned: "구매가 취소되었습니다",
      },
    };
  },
};
</script>
<template>
  <p v-text="options[status]"></p>
</template>
<style scoped></style>

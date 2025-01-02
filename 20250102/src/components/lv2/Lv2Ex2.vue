<script>
export default {
  name: "Lv2Ex2",
  data() {
    return {
      isHtml: true,
    };
  },
};
</script>
<template>
  <p
    v-html="
      isHtml ? '<b>HTML을 사용한 텍스트</b>' : 'HTML을 사용하지 않은 텍스트'
    "
  ></p>
</template>
<style scoped></style>

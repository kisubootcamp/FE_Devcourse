<script>
export default {
  name: "EX2_2",
  data() {
    return {
      isHtml: true,
    };
  },
};
</script>
<template>
  <p v-html="'<b>HTML을 사용한 텍스트</b>'"></p>
  <p v-text="'HTML을 사용하지 않은 텍스트'"></p>
</template>
<style></style>

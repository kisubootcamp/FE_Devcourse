<script>
export default {
  name: "EX4",
  data() {
    return {
      message: "안녕하세요! v-text 사용해서 출력중입니다.",
    };
  },
};
</script>
<template>
  <h1 v-text="message"></h1>
</template>
<style scoped></style>

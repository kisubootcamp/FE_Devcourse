<script>
export default {
  name: "EX3",
  data() {
    return {
      message: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <h1 v-html="message"></h1>
</template>
<style scoped></style>

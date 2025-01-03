<script>
export default {
  name: "Ex4",
  data() {
    return {
      message: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <h2>4. 텍스트 출력</h2>
  <p v-text="message"></p>
</template>

<style scoped></style>

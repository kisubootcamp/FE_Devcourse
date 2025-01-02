<script>
export default {
  name: "Ex3",
  data() {
    return {
      text: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <p v-html="text"></p>
</template>
<style scoped></style>

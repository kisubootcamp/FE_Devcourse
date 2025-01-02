<script>
export default {
  name: "EX9",
  data() {
    return {
      message: "<strong> v-html과 v-text의 차이점!!</strong>",
    };
  },
};
</script>
<template>
  <h1 v-html="message"></h1>
  <h1 v-text="message"></h1>
</template>
<style scoped></style>

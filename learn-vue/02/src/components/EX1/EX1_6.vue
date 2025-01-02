<script>
export default {
  name: "EX1_6",
  data() {
    return {
      message: "아무 문자열",
    };
  },
};
</script>
<template>
  <p v-text="(message = '바뀐 문자열')"></p>
</template>
<style></style>

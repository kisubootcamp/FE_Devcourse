<script>
export default {
  name: "EX1_9",
  data() {
    return {
      html: "<strong>html텍스트 입니다.</strong>",
      text: "일반 텍스트입니다.",
    };
  },
};
</script>
<template>
  <p v-html="html"></p>
  <p v-text="text"></p>
</template>
<style></style>

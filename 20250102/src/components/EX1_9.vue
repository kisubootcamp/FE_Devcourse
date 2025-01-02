<script>
export default {
  name: "EX1_9",
  data() {
    return {
      htmlContent: "<strong>HTML로 출력된 텍스트</strong>",
      plainText: "순수 텍스트입니다.",
    };
  },
};
</script>

<template>
  <div>
    <div v-html="htmlContent"></div>
    <p v-text="plainText"></p>
  </div>
</template>

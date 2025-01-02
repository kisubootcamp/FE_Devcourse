<script>
export default {
  name: "EX2_2",
  data() {
    return {
      isHtml: false,
      htmlContent: "<b>HTML을 사용한 텍스트</b>",
      plainText: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>

<template>
  <div>
    <button @click="isHtml = !isHtml">
      {{ isHtml ? "순수 텍스트로 변경" : "HTML로 변경" }}
    </button>
    <div v-if="isHtml" v-html="htmlContent"></div>
    <div v-else v-text="plainText"></div>
  </div>
</template>

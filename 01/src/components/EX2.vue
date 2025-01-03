<script>
export default {
  name: "EX2",
  data() {
    return {
      isHtml: true,
      html: "<b>HTML을 사용한 텍스트</b>",
      plain: "HTML을 사용하지 않은 텍스트",
    };
  },
};
</script>
<template>
  <p v-if="isHtml">{{ html }}</p>
  <p v-else>{{ plain }}</p>
</template>
<style scoped></style>

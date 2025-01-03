<script>
export default {
  name: "Ex1_9",
  data() {
    return {
      html: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <div v-html="html"></div>
  <div v-text="html"></div>
</template>
<style scoped></style>

<script>
export default {
  name: "Ex1_3",
  data() {
    return {
      html: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <div v-html="html"></div>
</template>
<style scoped></style>

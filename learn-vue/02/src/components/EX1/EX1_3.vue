<script>
export default {
  name: "EX1_3",
  data() {
    return {
      html: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <p v-html="html"></p>
</template>
<style></style>

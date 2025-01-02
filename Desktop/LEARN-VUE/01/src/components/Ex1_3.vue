<script>
export default {
  name: "Ex1_3",
  data() {
    return {
      string: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>
<template>
  <p v-html="string"></p>
</template>
<style scoped></style>

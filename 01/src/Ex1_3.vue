<script>
export default {
  name: "Ex1_3",
  data() {
    return {
      string: "<strong>HTML을 출력합니다!</string>",
    };
  },
};
</script>
<template>
  <p v-html="string"></p>
</template>
<style></style>

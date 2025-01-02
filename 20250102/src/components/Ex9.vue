<script>
export default {
  name: "Ex9",
  data() {
    return {
      html: "<p>안녕하세요</p>",
      text: "hoho",
    };
  },
};
</script>
<template>
  <div v-html="html"></div>
  <p v-text="text"></p>
</template>
<style scoped></style>

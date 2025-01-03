<script>
export default {
  name: "Ex9",
  data() {
    return {
      htext: "<em>minsu you out!</em>",
      text: "minsu you out!",
    };
  },
};
</script>
<template>
  <h1 v-html="htext"></h1>
  <h1 v-text="text"></h1>
</template>
<style scoped></style>

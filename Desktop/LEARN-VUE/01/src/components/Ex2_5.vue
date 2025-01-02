<script>
export default {
  name: "Ex2_5",
  data() {
    return {
      selectedOption: "bold",
      strongTxt: "<strong>텍스트</strong>",
      emTxt: "<em>텍스트</em>",
      txt: "텍스트",
    };
  },
};
</script>
<template>
  <template>
    <p
      v-html="
        selectedOption === 'bold'
          ? strongTxt
          : selectedOption === 'italic'
          ? emTxt
          : txt
      "
    ></p>
  </template>
</template>
<style scoped></style>

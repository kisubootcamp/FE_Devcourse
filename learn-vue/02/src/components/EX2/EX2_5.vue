<script>
export default {
  name: "EX2_5",
  data() {
    return {
      selectedOption: "bold",
      text: "텍스트",
    };
  },
};
</script>
<template>
  <p v-if="selectedOption === 'bold'">
    <strong>{{ text }}</strong>
  </p>
  <p v-else-if="selectedOption === 'italic'">
    <em>{{ text }}</em>
  </p>
  <p v-else>
    {{ text }}
  </p>
</template>
<style></style>

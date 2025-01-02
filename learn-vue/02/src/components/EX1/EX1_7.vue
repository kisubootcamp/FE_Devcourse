<script>
export default {
  name: "EX1_7",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <p v-if="isGreeting">Hello</p>
  <p v-else>Goodbye</p>
</template>
<style></style>

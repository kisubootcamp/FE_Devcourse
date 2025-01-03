<script>
export default {
  name: "Ex1_7",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>
<template>
  <div>
    <p v-if="isGreeting">Hello</p>
    <p v-else>Goodbye</p>
  </div>
</template>
<style></style>

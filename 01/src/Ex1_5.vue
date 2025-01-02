<script>
export default {
  name: "Ex1_5",
  data() {
    return {
      condition: true,
    };
  },
};
</script>
<template>
  <h1 v-show="condition">조건이 참입니다!</h1>
</template>
<style></style>

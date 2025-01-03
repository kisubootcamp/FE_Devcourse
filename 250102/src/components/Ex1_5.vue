<script>
export default {
  name: "Ex1_5",
  data() {
    return {
      active: true,
    };
  },
};
</script>
<template>
  <div v-show="active">조건이 참입니다!</div>
</template>
<style scoped></style>

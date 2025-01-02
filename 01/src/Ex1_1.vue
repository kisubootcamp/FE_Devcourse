<script>
export default {
  name: "Ex1_1",
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>
<template>
  <div>
    <button @click="isVisible = !isVisible">클릭</button>
    <p v-if="isVisible">조건이 참입니다!</p>
  </div>
</template>
<style></style>

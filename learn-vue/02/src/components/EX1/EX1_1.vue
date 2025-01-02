<script>
export default {
  name: "EX1_1",
  data() {
    return {
      isClicked: true,
    };
  },
  methods: {
    toggleIsClicked() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>
<template>
  <button type="button" @click="toggleIsClicked">클릭</button>
  <p v-if="isClicked">조건이 참입니다</p>
</template>
<style></style>

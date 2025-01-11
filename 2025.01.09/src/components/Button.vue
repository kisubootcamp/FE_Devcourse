<script>
export default {
  name: "Button",
  data() {
    return {
      buttonText: "헬로우",
      count: 10,
    };
  },
};
</script>
<template>
  <button>
    <slot :buttonText="buttonText" :count="count">
      <span>Default</span>
    </slot>
  </button>
</template>
<style scoped>
button {
  border: none;
  background: skyblue;
  color: #ffff;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
}
span {
  color: black;
}
</style>

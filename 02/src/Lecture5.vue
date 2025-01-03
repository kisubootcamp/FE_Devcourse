<script>
export default {
  name: "Lecture5",
  data() {
    return {
      styleObj: {
        color: "orange",
        textDecoration: "underline",
      },
      additionalSytles: {
        fontSize: "50px",
      },
      isActive: true,
      hasError: true,

      activeClass: "active",
      errorClass: "text-danger",
    };
  },
};
</script>
<template>
  <h1 style="color: red; text-decoration: underline">Hello</h1>
  <h1 :style="{ color: 'blue', textDecoration: 'underline' }">Hello</h1>
  <h1 :style="styleObj">Hello</h1>
  <h1 :style="[styleObj, additionalSytles]">Hello</h1>
  <h1 :class="{ active: isActive, 'text-danger': hasError }">Hello</h1>
  <h1 :class="[activeClass, errorClass]">Hello</h1>
</template>
<style scoped>
.active {
  color: blue;
}
.text-danger {
  color: red;
}
</style>

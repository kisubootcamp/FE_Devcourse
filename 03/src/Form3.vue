<script>
export default {
  name: "Form3",
  data() {
    return {
      age: "25",
    };
  },
};
</script>
<template>
  <h1>문제 3</h1>
  <input v-model="age" type="range" min="1" max="100" />
  <p>선택된 나이 : {{ age }}</p>
</template>
<style></style>

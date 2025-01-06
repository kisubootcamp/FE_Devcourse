<script>
export default {
  name: "Form4",
  data() {
    return {
      text: "",
    };
  },
};
</script>
<template>
  <h1>문제 4</h1>
  <textarea v-model="text"></textarea>
  <p>{{ text }}</p>
</template>
<style>
textarea {
  border: 1px solid #b0b0b0;
  outline: none;
}
</style>

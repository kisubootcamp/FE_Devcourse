<script>
export default {
  name: "App",
  data() {
    return {
      input: "",
      text: "",
    };
  },
};
</script>
<template>
  <input v-model="input" type="text" />
  <textarea v-model="text"></textarea>
  <h1>{{ input }}</h1>
  <h1>{{ text }}</h1>
</template>
<style scoped></style>

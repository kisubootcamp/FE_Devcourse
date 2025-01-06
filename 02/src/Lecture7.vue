<script>
export default {
  name: "Lecture7",
  data() {
    return {
      input: "",
      text: "",
    };
  },
};
</script>
<template>
  <!-- v-model 양방향 바인딩 디렉티브 -->
  <input v-model="input" type="text" />
  <h1>{{ input }}</h1>
  <textarea v-model="text"></textarea>
  <h1>{{ text }}</h1>
</template>
<style></style>

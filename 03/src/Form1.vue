<script>
export default {
  name: "Form1",
  data() {
    return {
      text: "",
    };
  },
};
</script>
<template>
  <h1>문제 1</h1>
  <span>이름 :</span>
  <input type="text" v-model="text" />
  <span>{{ text }}</span>
</template>
<style scoped>
span {
  margin-right: 10px;
}
input {
  border: 1px solid #b0b0b0;
  outline: none;
}
span:last-child {
  margin-left: 10px;
}
</style>

<script>
export default {
  name: "Form2",
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>
<template>
  <h1>문제 2</h1>
  <input type="checkbox" v-model="isChecked" />
  {{
    isChecked
      ? "회원가입 약관에 동의합니다"
      : "회원가입 약관에 동의하지 않습니다"
  }}
</template>
<style></style>

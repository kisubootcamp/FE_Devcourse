<script>
export default {
  name: "EX1_6",
  data() {
    return {
      message: "텍스트 출력출력",
    };
  },
};
</script>

<template>
  <div>
    <p v-text="message" />
  </div>
</template>

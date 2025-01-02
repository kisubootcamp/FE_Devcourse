<script>
export default {
  name: "EX1_3",
  data() {
    return {
      data: "<strong>HTML을 출력합니다!</strong>",
    };
  },
};
</script>

<template>
  <div>
    <div v-html="data"></div>
  </div>
</template>

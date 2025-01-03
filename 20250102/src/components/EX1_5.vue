<script>
export default {
  name: "EX1_5",
  data() {
    return {
      isTrue: false,
    };
  },
};
</script>

<template>
  <div>
    <button @click="isTrue = !isTrue">버튼 클릭</button>
    <p v-show="isTrue">조건이 참입니다!</p>
  </div>
</template>

<!-- EX1.1-->
<script>
export default {
  name: "EX1.1",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<template>
  <div>
    <div v-if="!isOpen">
      <button v-if="!isOpen" v-on:click="isOpen = true">클릭</button>
    </div>
    <p v-if="isOpen">조건이 참입니다!</p>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
}
p {
  font-size: 18px;
  color: green;
}
</style>

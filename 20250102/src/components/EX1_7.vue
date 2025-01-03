<script>
export default {
  name: "EX1_7",
  data() {
    return {
      isGreeting: true,
    };
  },
};
</script>

<template>
  <div>
    <button @click="isGreeting = !isGreeting">인사 버튼</button>
    <p v-if="isGreeting">Hello</p>
    <p v-else>Goodbye</p>
  </div>
</template>

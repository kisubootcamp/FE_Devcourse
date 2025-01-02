<script>
export default {
  name: "Ex2",
  data() {
    return {
      weather: "sunny",
    };
  },
};
</script>
<template>
  <p v-if="weather === 'sunny'">맑음</p>
  <p v-else-if="weather === 'rainy'">비</p>
  <p v-else>흐림</p>
</template>
<style scoped></style>

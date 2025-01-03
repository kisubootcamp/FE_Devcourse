<script>
export default {
  name: "EX1_2",
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
  <p v-else-if="weather === 'cloudy'">구름</p>
</template>
<style></style>

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
  <h2>2. 조건부 렌더링</h2>
  <p v-if="weather === 'sunny'">날씨 좋음</p>
  <p v-else-if="weather === 'rainy'">날씨 비옴</p>
  <p v-else="weather === 'cloudy'">날씨 구름</p>
</template>

<style scoped></style>

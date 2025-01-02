<script>
export default {
  name: "EX2",
  data() {
    return {
      weather: "rainy",
    };
  },
};
</script>
<template>
  <div>
    <h1 v-if="weather === 'sunny'">맑음</h1>
    <h1 v-else-if="weather === 'rainy'">비</h1>
    <h1 v-else-if="weather === 'cloudy'">흐림</h1>
    <h1 v-else>날씨를 알 수 없습니다.</h1>
  </div>
</template>
<style scoped></style>

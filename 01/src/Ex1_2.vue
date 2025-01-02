<script>
export default {
  name: "Ex1_2",
  data() {
    return {
      weather: "sunny",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="weather === 'sunny'">Sunny ☀️</p>
    <p v-else-if="weather === 'rainy'">Rainy 🌧️</p>
    <p v-else="weather === 'cloudy'">Cloudy ☁️</p>
  </div>
</template>
<style></style>

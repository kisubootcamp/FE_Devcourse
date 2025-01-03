<script>
export default {
  name: "Ex2",
  data() {
    return {
      weather: "rainy",
    };
  },
};
</script>
<template>
  <h1 v-if="weather === 'sunny'">써니!</h1>
  <h1 v-else-if="weather === 'rainy'">레이니!</h1>
  <h1 v-else-if="weather === 'cloudy'">클라우디!</h1>
</template>
<style scoped></style>

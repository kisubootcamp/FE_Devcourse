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
  <p v-if="weather === 'sunny'">sunny</p>
  <p v-else-if="weather === 'rainy'">rainy</p>
  <p v-else-if="weather === 'cloudy'">cloudy</p>
  <p v-else>Unknown weather</p>
</template>
<style scoped></style>

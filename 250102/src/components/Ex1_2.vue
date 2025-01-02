<script>
export default {
  name: "Ex1_2",
  data() {
    return {
      weather: "rainy",
    };
  },
};
</script>
<template>
  <div v-if="weather === 'sunny'">sunny</div>
  <div v-else-if="weather === 'rainy'">rainy</div>
  <div v-else-if="weather === 'cloudy'">cloudy</div>
</template>
<style scoped></style>

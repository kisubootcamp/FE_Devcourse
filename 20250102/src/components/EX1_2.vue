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
  <div>
    <div>
      <button @click="weather = 'sunny'">맑음</button>
      <button @click="weather = 'rainy'">비</button>
      <button @click="weather = 'cloudy'">흐림</button>
    </div>

    <p v-if="weather === 'sunny'">맑음!</p>
    <p v-else-if="weather === 'rainy'">비옴!</p>
    <p v-else>구름 많음!</p>
  </div>
</template>

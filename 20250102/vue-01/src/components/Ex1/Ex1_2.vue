<script>
export default {
  name: 'Ex1_2',
  data() {
    return {
      weather: 'cloudy'
    };
  },
};
</script>
<template>
  <h2>Lv1. 2번</h2>

  <p v-if="weather === 'sunny'">맑음입니다.</p>
  <p v-else-if="weather === 'rainy'">비가 옵니다.</p>
  <p v-else-if="weather === 'cloudy'">흐림입니다.</p>

  <hr />
</template>
<style scoped>
  
</style>
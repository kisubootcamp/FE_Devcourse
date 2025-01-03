<script>
export default {
  name: 'Ex3_5',
  data() {
    return {
      buttons: ['Save', 'Cancel', 'Delete']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 5번</h2>
  <button v-for="button in buttons" :key="button">{{ button }}</button>
  <hr/>
</template>
<style scoped>
  
</style>
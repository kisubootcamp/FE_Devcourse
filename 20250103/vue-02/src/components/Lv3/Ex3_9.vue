<script>
export default {
  name: 'Ex3_9',
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 9번</h2>
  <ul>
    <li v-for="(item, key) in items" :key="item" :style="{ fontWeight: key === 0 ? 'bold' : 'normal' }">
      {{ item }}
    </li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
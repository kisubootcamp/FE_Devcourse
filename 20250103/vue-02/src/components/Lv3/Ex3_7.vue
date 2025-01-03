<script>
export default {
  name: 'Ex3_7',
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Grapes']
    };
  },
};
</script>
<template>
  <h2>Lv3 - 7번</h2>
  <ul>
    <li v-for="fruit in fruits" :key="fruit" :class="fruit === 'Apple' ? 'red' : 'green'">
      {{ fruit }}
    </li>
  </ul>
  <hr/>
</template>
<style scoped>
  .red {
    color: red;
  }

  .green {
    color: green;
  }
</style>
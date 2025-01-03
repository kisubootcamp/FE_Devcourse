<script>
export default {
  name: "Ex",
  data() {
    return { num: [1, 2, 3] };
  },
};
</script>
<template>
  <ul>
    <li v-for="(value, index) in num" v-bind:key="index">
      {{ index }}-{{ value }}
    </li>
  </ul>
</template>
<style scoped></style>

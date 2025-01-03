<script>
export default {
  name: "Ex5",
  data() {
    return {
      buttons: ["Save", "Cancel", "Delete"],
    };
  },
};
</script>
<template>
  <h2>문제5</h2>
  <ul>
    <li v-for="(value, index) in buttons" :key="index">
      <button>
        {{ value }}
      </button>
    </li>
  </ul>
</template>
<style scoped></style>

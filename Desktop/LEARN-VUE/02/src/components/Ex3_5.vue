<script>
export default {
  name: "Ex3_5",
  data() {
    return {
      buttons: ["Save", "Cancel", "Delete"],
    };
  },
};
</script>
<template>
  <button v-for="(value, index) in buttons" :key="index">{{ value }}</button>
</template>
<style scoped></style>

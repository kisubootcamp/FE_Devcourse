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
  <button v-for="(button, key) in buttons" :key>{{ button }}</button>
</template>
<style scoped></style>

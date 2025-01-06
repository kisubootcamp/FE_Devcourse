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
  <button v-for="(button, index) in buttons" :key="index">
    {{ button }}
  </button>
</template>
<style scoped></style>

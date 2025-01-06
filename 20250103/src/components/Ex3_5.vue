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
  <button v-for="(val, index) in buttons">{{ val }}</button>
</template>
<style scoped></style>

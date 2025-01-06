<script>
export default {
  name: "EX3_5",
  data() {
    return {
      buttons: ["Save", "Cancel", "Delete"],
    };
  },
};
</script>
<template>
  <button type="button" v-for="button in buttons">{{ button }}</button>
</template>
<style></style>

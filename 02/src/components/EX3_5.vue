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
  <div>
    <button v-for="(btn, index) in buttons" :key="index">
      {{ btn }}
    </button>
  </div>
</template>
<style scoped></style>

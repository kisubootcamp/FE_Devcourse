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
    <button v-for="(button, index) in buttons" :key="index">
      {{ button }}
    </button>
  </div>
</template>
<style></style>

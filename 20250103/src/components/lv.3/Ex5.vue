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
  <div>
    <template v-for="(button, index) in buttons" :key="index">
      <button>{{ button }}</button>
    </template>
  </div>
</template>
<style scoped></style>

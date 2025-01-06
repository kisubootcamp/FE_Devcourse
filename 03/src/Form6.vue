<script>
export default {
  name: "Form6",
  data() {
    return {
      checked: [],
    };
  },
};
</script>
<template>
  <h1>문제 6</h1>
  <label>
    <input type="checkbox" v-model="checked" value="Apple" /> Apple
  </label>
  <label>
    <input type="checkbox" v-model="checked" value="Banana" /> Banana
  </label>
  <label>
    <input type="checkbox" v-model="checked" value="Orange" /> Orange
  </label>
  <p>{{ checked }}</p>
</template>
<style></style>

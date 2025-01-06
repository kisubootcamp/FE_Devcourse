<script>
export default {
  name: "Form8",
  data() {
    return {
      selectedcolor: "#ffffff",
    };
  },
};
</script>
<template>
  <h1>문제 8</h1>
  <div class="box" :style="{ backgroundColor: selectedcolor }"></div>
  <input type="color" v-model="selectedcolor" />
</template>
<style>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #b0b0b0;
}
</style>

<script>
export default {
  name: "Form5",
  data() {
    return {
      selected: "Apple",
    };
  },
};
</script>
<template>
  <h1>문제 5</h1>
  <select v-model="selected">
    <option value="Apple">Apple</option>
    <option value="Banana">Banana</option>
    <option value="Orange">Orange</option>
  </select>
  <span>{{ selected }}</span>
</template>
<style>
select {
  border: 1px solid #b0b0b0;
  outline: none;
}
span {
  margin-left: 10px;
}
</style>

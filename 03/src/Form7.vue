<script>
export default {
  name: "Form7",
  data() {
    return {
      checked: "",
    };
  },
};
</script>
<template>
  <h1>문제 7</h1>
  <label
    ><input type="radio" v-model="checked" value="남자" />
    <span>남자 </span>
  </label>
  <label>
    <input type="radio" v-model="checked" value="여자" />
    <span>여자</span>
  </label>
  <p>{{ checked }}</p>
</template>
<style>
label:last-of-type {
  margin-left: 10px;
}
</style>

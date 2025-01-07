<!-- v-model 폼요소  -->
<script>
export default {
  name: "Vmodel",
  data() {
    return {
      input: "",
      uid: "",
      upw: "",
      desc: "",
      chk: true,
      fruits: ["apple", "orange", "banana"],
      radio: "",
      selectedItem: "item1",
    };
  },
};
</script>
<template>
  <input v-model="input" type="text" />
  <h1>{{ input }}</h1>
  <form action="">
    <label for="uid">
      <span>아이디</span>
      <input v-model="uid" type="text" id="uid" />
    </label>
    {{ uid }}
    <label for="upw">
      <span>비밀번호</span>
      <input v-model="upw" type="password" id="upw" />
    </label>
    <label for="desc">
      <span>상세내용</span>
      <input v-model="desc" type="text" id="desc" />
    </label>
    <label for="remember">
      <span>check</span>
      <input v-model="remember" type="checkbox" id="remember" />
    </label>
    <div>
      <label>
        <span>apple</span>
        <input v-model="fruits" type="checkbox" value="apple" />
      </label>
      <label>
        <span>orange</span>
        <input v-model="fruits" type="checkbox" value="orange" />
      </label>
      <label>
        <span>banana</span>
        <input v-model="fruits" type="checkbox" value="banana" />
      </label>
    </div>
    <label
      ><input v-model="radio" type="radio" name="gender" id="male" />남자</label
    >
    <label
      ><input
        v-model="radio"
        type="radio"
        name="gender"
        id="female"
      />여자</label
    >
    <label
      >아이템
      <select v-model="selectedItem">
        <option value="item1">item1</option>
        <option value="item2">item2</option>
        <option value="item3">item3</option>
      </select>
    </label>
  </form>
</template>
<style scoped>
label {
  display: block;
  margin: 10px 0;
}
span {
  width: 60px;
  margin: 10px 0;
}
</style>

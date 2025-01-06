<script>
export default {
  name: "Lecture8",
  data() {
    return {
      directiveName: "v-model",
      userId: "test",
      number: 3,
      food: "바나나",
      text: "여러 줄 바꿈\n텍스트에어리어",
      checked: true,
      multiChecked: [],
      radioChecked: "",
    };
  },
};
</script>
<template>
  <div>
    <h1>{{ directiveName }}</h1>
    <label>ID</label>
    <input type="text" v-model="userId" />
    <input type="number" v-model="number" />
    <select v-model="food">
      <option value="사과">사과</option>
      <option value="바나나">바나나</option>
      <option value="멜론">멜론</option>
    </select>
    <textarea v-model="text"></textarea>
    <!-- <input type="checkbox" v-model="checked" /> {{ checked }} -->
    <input
      type="checkbox"
      v-model="checked"
      true-value="참"
      false-value="거짓" />
    {{ checked }}
    <label
      ><input type="checkbox" v-model="multiChecked" value="사과" /> 사과
    </label>
    <label
      ><input
        type="checkbox"
        v-model="multiChecked"
        value="바나나" />바나나</label
    >
    <label
      ><input type="checkbox" v-model="multiChecked" value="멜론" />멜론</label
    >
    <p>{{ multiChecked }}</p>
    <label
      ><input type="radio" v-model="radioChecked" value="사과" /> 사과
    </label>
    <label
      ><input type="radio" v-model="radioChecked" value="바나나" />바나나</label
    >
    <label
      ><input type="radio" v-model="radioChecked" value="멜론" />멜론</label
    >
    <p>{{ radioChecked }}</p>
  </div>
</template>
<style></style>

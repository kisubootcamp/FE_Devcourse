<script>
export default {
  name: "Lecture1",
  data() {
    return {
      items: ["apple", "orange", "banana"],
      itemsObj: [
        { id: 1, name: "james" },
        { id: 2, name: "smith" },
      ],
      person: {
        name: "john",
        age: 30,
      },
    };
  },
};
</script>
<template>
  <!-- 배열 v-for -->
  <ul>
    <li v-for="(value, index) in items" :key="index">
      {{ index }} - {{ value }}
    </li>
  </ul>
  <hr />
  <ul>
    <li v-for="value in itemsObj" :key="value.id">
      {{ value.id }} - {{ value.name }}
    </li>
  </ul>
  <hr />
  <!-- 배열에 filter를 사용한 v-for -->
  <ul>
    <li
      v-for="value in itemsObj.filter((item) => item.name === 'james')"
      :key="value.id">
      {{ value.id }} - {{ value.name }}
    </li>
  </ul>
  <hr />
  <!-- 객체 v-for -->
  <ul>
    <li v-for="(value, key) in person" :key="key">{{ key }} - {{ value }}</li>
  </ul>
</template>
<style></style>

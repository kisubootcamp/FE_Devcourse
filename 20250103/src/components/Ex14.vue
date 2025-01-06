<script>
export default {
  name: "Ex14",
  data() {
    return {
      tasks: [
        { title: "Vue 공부하기", completed: false },
        { title: "프로젝트 작업", completed: true },
        { title: "운동하기", completed: false },
      ],
    };
  },
};
</script>
<template>
  <h2>Level4 - 문제4</h2>
  <ul>
    <li v-for="(value, index) in tasks" :key="index">
      <input type="checkbox" :checked="value.completed" />
      {{ value.title }}
    </li>
  </ul>
</template>
<style scoped></style>

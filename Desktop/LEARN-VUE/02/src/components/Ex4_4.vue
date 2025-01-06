<script>
export default {
  name: "Ex4_4",
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
  <ul>
    <li v-for="(value, index) in tasks" :key="index">
      <label>
        <input type="checkbox" :checked="value.completed" />
        <p>{{ value.title }}</p>
      </label>
    </li>
  </ul>
</template>
<style scoped></style>

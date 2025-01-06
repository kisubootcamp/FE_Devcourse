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
    <li v-for="(task, index) in tasks" :key="index">
      <label>
        <input type="checkbox" :checked="task.completed" />
        <span>{{ task.title }}</span>
      </label>
    </li>
  </ul>
</template>
<style></style>

<script>
export default {
  name: "EX4_4",
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
    <template v-for="task in tasks">
      <li>
        <div>{{ task.title }}</div>
        <input type="checkbox" :checked="task.completed" />
      </li>
    </template>
  </ul>
</template>
<style></style>

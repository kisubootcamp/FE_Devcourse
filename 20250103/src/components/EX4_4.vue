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
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.title">
        <input type="checkbox" v-model="task.completed" />
        <span
          :style="{ textDecoration: task.completed ? 'line-through' : 'none' }"
          >{{ task.title }}</span
        >
      </li>
    </ul>
  </div>
</template>
<style></style>

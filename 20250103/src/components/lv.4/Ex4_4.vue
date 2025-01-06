<script>
export default {
  name: "Ex4",
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
    <template v-for="(task, index) in tasks" :key="index">
      <div>
        <input :id="task.index" type="checkbox" :checked="task.completed" />
        <label :for="task.index">
          {{ task.title }}
        </label>
      </div>
    </template>
  </div>
</template>
<style scoped></style>

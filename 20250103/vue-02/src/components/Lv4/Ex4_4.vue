<script>
export default {
  name: 'Ex4_4',
  data() {
    return {
      tasks: [
        { title: 'Vue 공부하기', completed: false },
        { title: '프로젝트 작업', completed: true },
        { title: '운동하기', completed: false }
      ]
    };
  },
};
</script>
<template>
  <h2>Lv4 - 4번</h2>
  <ul>
    <li v-for="task in tasks" :key="task.title">
      <input type="checkbox" :checked="task.completed" />
      {{ task.title }}
    </li>
  </ul>
  <hr/>
</template>
<style scoped>
  
</style>
<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todos: Array,
  handleDelete: Function,
  handleCheck: Function,
});
</script>
<template>
  <ul
    className="divide-y divide-gray-200"
    v-for="(todo, index) in todos"
    :key="index"
  >
    <TodoListItem
      :title="todo.text"
      :completed="todo.completed"
      :handle-check="() => props.handleCheck(index)"
      :handle-delete="() => props.handleDelete(index)"
    />
  </ul>
</template>
<style></style>

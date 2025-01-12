<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props: {
    todos: Array,
    toggleTodo: Function,
    removeTodo: Function,
  },
};
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :toggleTodo="toggleTodo"
      :removeTodo="removeTodo"
    />
  </ul>
</template>

<style></style>

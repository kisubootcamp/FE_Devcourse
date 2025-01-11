<script setup>
import TodoListItem from "./TodoListItem.vue";

const props = defineProps({
  todos: Array,
  deleteTodo: Function,
  toggleTodo: Function,
});
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <li v-for="todo in props.todos" :key="todo.id">
      <TodoListItem
        :todo="todo"
        :delete-todo="deleteTodo"
        :toggle-todo="toggleTodo"
      />
    </li>
  </ul>
</template>
<style></style>

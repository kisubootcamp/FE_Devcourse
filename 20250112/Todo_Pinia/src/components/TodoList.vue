<script setup>
import { useTodoStore } from "../stores/todoStore";
import TodoListItem from "./TodoListItem.vue";

const todoStore = useTodoStore();
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
      :toggleTodo="todoStore.toggleTodo"
      :removeTodo="todoStore.removeTodo"
    />
  </ul>
</template>

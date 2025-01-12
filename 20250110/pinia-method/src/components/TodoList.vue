<script setup>
import { useTodoStore } from "@/store/todoStore";
import TodoListItem from "./TodoListItem.vue";

const todoStore = useTodoStore();
const { todos } = todoStore;
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
      :currentIndex="index"
    />
  </ul>
</template>
<style></style>

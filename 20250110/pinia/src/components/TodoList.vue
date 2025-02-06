<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";
import TodoListItem from "./TodoListItem.vue";
const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);
</script>

<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </ul>
</template>
<style></style>

<script setup>
import { useTodosStore } from "@/stores/todo";
import TodoListItem from "./TodoListItem.vue";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();
const { todos } = storeToRefs(todosStore);
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>
<style></style>

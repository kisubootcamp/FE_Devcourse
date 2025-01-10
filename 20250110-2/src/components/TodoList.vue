<script setup>
import { useTodoStore } from "@/stores/todoStore";
import TodoListItem from "./TodoListItem.vue";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todoList } = storeToRefs(todoStore);
</script>
<template>
  <ul class="divide-y divide-gray-200">
    <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
  </ul>
</template>
<style></style>

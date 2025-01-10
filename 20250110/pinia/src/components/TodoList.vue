<script setup>
import TodoListItem from "./TodoListItem.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem v-for="todo of todos" key="todo.id" :todo="todo" />
  </ul>
</template>
<style></style>

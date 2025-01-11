<script setup>
import { useTodoStore } from "@/store/todoStore";
import TodoListItem from "./TodoListItem.vue";
import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem v-for="(item, index) in todos" :key="index" :item />
  </ul>
</template>
<style></style>

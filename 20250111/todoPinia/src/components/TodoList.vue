<script setup>
import { useCountStore } from "@/stores/countStore";
import TodoListItem from "./TodoListItem.vue";

const countStore = useCountStore();
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <li v-for="todo in countStore.todos" :key="todo.id">
      <TodoListItem />
    </li>
  </ul>
</template>
<style></style>

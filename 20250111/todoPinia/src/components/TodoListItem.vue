<script setup>
import { useCountStore } from "@/stores/countStore";

const countStore = useCountStore();
</script>
<template>
  <li
    v-for="todo in countStore.todos"
    :key="todo.id"
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        @change="countStore.toggleTodo(todo.id)"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <span>{{ todo.todo }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="countStore.deleteTodo(todo.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

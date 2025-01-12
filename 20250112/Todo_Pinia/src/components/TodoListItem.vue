<script setup>
import { defineProps } from "vue";

defineProps({
  todo: Object,
  toggleTodo: Function,
  removeTodo: Function,
});
</script>

<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        :checked="todo.completed"
        @change="toggleTodo(todo.id)"
      />
      <span :class="{ 'line-through text-gray-500': todo.completed }">
        {{ todo.text }}
      </span>
    </div>
    <button
      @click="() => removeTodo(todo.id)"
      className="text-red-500 hover:text-red-700 ml-4"
    >
      Delete
    </button>
  </li>
</template>

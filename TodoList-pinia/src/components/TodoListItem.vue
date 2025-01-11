<script setup>
import { useTodoStore } from '@/stores/todoStore';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const store = useTodoStore();
</script>

<template>
  <li class="flex items-center justify-between p-3 transition-colors hover:bg-gray-100">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="() => store.toggleTodo(todo.id)"
      class="w-4 h-4 focus:ring-blue-400"
    />
    <span
      class="flex-grow ml-2"
      :class="{ 'line-through text-gray-400': todo.completed }"
    >
      {{ todo.text }}
    </span>
    <button
      @click="() => store.deleteTodo(todo.id)"
      class="ml-4 text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  </li>
</template>
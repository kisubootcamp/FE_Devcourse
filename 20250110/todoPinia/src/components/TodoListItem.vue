<script setup>
import { useTodoStore } from "@/store/todoStore";

const props = defineProps({
  item: Object,
});

const todoStore = useTodoStore();
const { toggleTodo, removeTodo } = todoStore;
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        :checked="item.completed"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        @change="toggleTodo(item.id)"
      />
      <span :class="item.completed ? 'line-through' : ''">{{ item.text }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="removeTodo(item.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

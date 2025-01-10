<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  todo: Object,
});

const todoStore = useTodoStore();
const { deleteTodo } = todoStore;
</script>
<template>
  <li
    class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        class="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        v-model="todo.checked"
      />
      <span :class="{ 'line-through': props.todo.checked }">{{
        todo.text
      }}</span>
    </div>
    <button
      class="text-red-500 hover:text-red-700 ml-4"
      @click="deleteTodo(todo.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

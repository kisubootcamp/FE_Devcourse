<script setup>
import { useTodoStore } from "@/store/todoStore";

const todoStore = useTodoStore();

const { handleCheck, handleDelete } = todoStore;
const props = defineProps({
  title: String,
  completed: Boolean,
  currentIndex: Number,
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
        :checked="props.completed"
        @input="() => handleCheck(props.currentIndex)"
      />
      <span :className="props.completed && 'line-through'">{{
        props.title
      }}</span>
    </div>
    <button
      @click="() => handleDelete(props.currentIndex)"
      className="text-red-500 hover:text-red-700 ml-4"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

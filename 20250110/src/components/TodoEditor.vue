<script setup>
import { ref } from "vue";

const todoText = ref("");

const props = defineProps({
  todoList: Array,
});

const handleClick = () => {
  if (todoText.value.trim().length > 0) {
    props.todoList.push({
      todoText: todoText.value,
      id: Date.now(),
      check: false,
    });
  }
  todoText.value = "";
};
</script>
<template>
  <div className="flex p-4">
    <input
      v-model="todoText"
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      @click="handleClick"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>

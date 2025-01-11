<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const store = useTodoStore();
const inputText = ref("");

const handleSubmit = (event) => {
  event.preventDefault();
  if (inputText.value.trim() === "") return;
  
  store.addTodo(inputText.value);
  inputText.value = "";
};
</script>

<template>
  <form @submit="handleSubmit" class="flex p-4">
    <input
      v-model="inputText"
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600"
    >
      Add Todo
    </button>
  </form>
</template>
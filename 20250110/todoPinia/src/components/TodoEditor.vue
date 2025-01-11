<script setup>
import { useTodoStore } from "@/store/todoStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

let text = ref("");

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);

const addTodo = () => {
  if (text.value.trim()) {
    todos.value = [
      ...todos.value,
      { id: Date.now(), text: text.value, completed: false },
    ];
    text.value = "";
  }
};
</script>
<template>
  <div className="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-model="text"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addTodo"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>

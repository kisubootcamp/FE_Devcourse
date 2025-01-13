<script setup>
import { useCountStore } from "@/stores/countStore";

const countStore = useCountStore();
</script>
<template>
  <div className="flex p-4">
    <input
      type="text"
      v-model="countStore.inputTodo"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @keyup.enter="countStore.addTodo"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="countStore.addTodo"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>

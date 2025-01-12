<script setup>
import { useTodoStore } from "@/store/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { text } = storeToRefs(todoStore);
const { handleChange, handleSubmit } = todoStore;
</script>
<template>
  <form className="flex p-4" @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :value="text"
      @input="(event) => handleChange(event)"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>

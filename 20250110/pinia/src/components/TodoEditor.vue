<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { inputText } = storeToRefs(todoStore);

const { addTodo, handleInputText } = todoStore;
// 할 일 목록에 새로운 할 일 추가
const handleAddTodo = () => {
  addTodo({ id: Date.now(), text: inputText.value, done: false });
  document.querySelector("input").focus();
};
</script>
<template>
  <form @submit.prevent className="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :value="inputText"
      @input="handleInputText"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="handleAddTodo"
    >
      Add Todo
    </button>
  </form>
</template>
<style></style>

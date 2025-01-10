<script setup>
import { ref } from "vue";

const props = defineProps({
  todoList: Array,
  handleAddBtn: Function,
});
const generateId = () => Date.now();

const inputValue = ref("");
const handleAddBtn = (text) => {
  if (inputValue.value === "") return;
  props.todoList.push({ id: generateId(), text: text, checked: false });
  inputValue.value = "";
};
</script>
<template>
  <div className="flex p-4">
    <form @submit.prevent="handleAddBtn(inputValue)">
      <input
        v-model="inputValue"
        type="text"
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  </div>
</template>
<style></style>

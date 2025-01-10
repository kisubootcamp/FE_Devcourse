<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { ref } from "vue";

const { handleAddTodo } = useTodoStore();

const value = ref("");

const handleAdd = () => {
  if (!value.value) return alert("할 일을 입력해주세요.");
  handleAddTodo(value.value);
  value.value = "";
};

const handleChangeValue = (e) => {
  value.value = e.target.value;
};

const handleKey = (e) => {
  if (e.isComposing) return;
  if (e.key === "Enter" || e.code === "Enter") handleAdd();
};
</script>

<template>
  <div className="flex p-4">
    <input
      v-model="value"
      type="text"
      placeholder="Enter a new todo"
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @:input="handleChangeValue($event)"
      @:keydown="handleKey($event)"
    />
    <button
      @click="handleAdd"
      className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>

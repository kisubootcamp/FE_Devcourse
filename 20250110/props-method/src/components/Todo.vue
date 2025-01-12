<script setup>
import { onBeforeUpdate, onMounted, onUpdated, reactive, ref } from "vue";
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

const text = ref("");
const todos = reactive([]);

onMounted(() => {
  handleLoadTodos();
});

const handleSaveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
const handleLoadTodos = () => {
  const parsedTodos = JSON.parse(localStorage.getItem("todos"));
  if (parsedTodos) todos.splice(0, todos.length, ...parsedTodos);
};

const handleChange = (event) => {
  text.value = event.target.value;
};

const handleSubmit = () => {
  if (text.value.trim().length === 0) return;
  todos.push({ text: text.value, completed: false });
  text.value = "";
  handleSaveTodos();
};

const handleCheck = (checkedIndex) => {
  todos[checkedIndex].completed = !todos[checkedIndex].completed;
  handleSaveTodos();
};
const handleDelete = (deletedIndex) => {
  todos.splice(deletedIndex, 1);
  handleSaveTodos();
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor
      :text="text"
      :handle-change="handleChange"
      :handle-submit="handleSubmit"
    />
    <TodoList
      :todos="todos"
      :handle-check="handleCheck"
      :handle-delete="handleDelete"
    />
  </div>
</template>
<style></style>

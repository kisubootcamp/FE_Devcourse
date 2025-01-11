import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore("countStore", () => {
  const todos = ref([]);
  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
  const toggleTodo = (id) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };
  const inputTodo = ref("");
  const addTodo = () => {
    if (inputTodo.value.trim() !== "") {
      todos.value.push({
        id: Date.now(),
        todo: inputTodo.value,
        completed: false,
      });
      inputTodo.value = "";
    }
  };
  return {
    todos,
    deleteTodo,
    toggleTodo,
    inputTodo,
    addTodo,
  };
});

import { defineStore } from "pinia";
import { reactive, ref } from "vue";

// todo 변수및 함수 전역상태 관리
export const useTodoStore = defineStore("todoStore", () => {
  const text = ref("");
  const todos = reactive([]);

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

  return {
    text,
    todos,
    handleChange,
    handleSubmit,
    handleCheck,
    handleDelete,
    handleSaveTodos,
    handleLoadTodos,
  };
});

import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useStore = defineStore("countStore", () => {
  const inputText = ref("");
  const clearInputText = () => {
    inputText.value = "";
  };
  const todoList = reactive([]);
  const setTodoList = (text) => {
    todoList.push(text);
  };
  const deleteTodoList = (idx) => {
    todoList.splice(idx, 1);
  };
  return {
    inputText,
    clearInputText,
    todoList,
    setTodoList,
    deleteTodoList,
  };
});

import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTodoStore = defineStore('todoStore', () => {
  const todoList = reactive([]);
  const addTodo = (todo) => {
    todoList.push(todo);
  };
  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };
  const toggleDone = (index) => {
    todoList[index].done = !todoList[index].done;
  };
  return { todoList, addTodo, removeTodo, toggleDone };
});

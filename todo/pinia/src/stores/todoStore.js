import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(text){
      this.todos.push({ id: Date.now(), text, completed: false});
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id){
      this.todos = this.todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      );
    },
  }
})
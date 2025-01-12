<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "../stores/todoStore";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  setup(){
    const todoStore = useTodoStore();
    return {todoStore};
  },
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="todoStore.addTodo"/>
    <TodoList
      :todos="todoStore.todos"
      @delete-todo="todoStore.deleteTodo"
      @toggle-todo="todoStore.toggleTodo"
    />
  </div>
</template>
<style></style>

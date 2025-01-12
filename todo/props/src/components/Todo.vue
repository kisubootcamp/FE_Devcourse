<script>
import TodoEditor from "./TodoEditor.vue";
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoEditor,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo){
      this.todos.push({id: Date.now(), text: todo, completed: false});
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id){
      this.todo = this.todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      );
    },
  }
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor @add-todo="addTodo"/>
    <TodoList
      :todos="todos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
</template>
<style></style>

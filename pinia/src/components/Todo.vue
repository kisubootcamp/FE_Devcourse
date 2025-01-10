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
    return {};
  },
};
</script>
<template>
  <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
    <TodoHeader />
    <TodoEditor />
    <TodoList />
  </div>
</template>
<style></style>

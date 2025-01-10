<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem />
    <TodoListItem />
    <TodoListItem />
  </ul>
</template>
<style></style>

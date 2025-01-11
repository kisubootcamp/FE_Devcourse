<script setup>
const props = defineProps({
  todo: Object,
  todolist: Array,
});

const handleDelete = () => {
  const deleteIndex = props.todolist.findIndex(
    (todo) => props.todo.id === todo.id
  );

  props.todolist.splice(deleteIndex, 1);
};
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        v-model="props.todo.check"
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <span :style="{ textDecoration: todo.check ? `line-through` : 'none' }">{{
        props.todo.todoText
      }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="handleDelete"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

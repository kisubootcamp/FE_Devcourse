<script setup>
import { handleError } from "vue";

const props = defineProps({
  todo: { id: Number, text: String, done: Boolean },
});

const emit = defineEmits(["toggleDone", "deleteTodo"]);

const toggleDone = (id) => {
  emit("toggleDone", id);
};

const handleDelete = (id) => {
  emit("deleteTodo", id);
};
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
        :checked="todo.done"
        @change="toggleDone(todo.id)"
      />
      <span :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="handleDelete(todo.id)"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

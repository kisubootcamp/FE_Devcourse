<script setup>
import { ref, watch } from "vue";

const todoItemProps = defineProps({
  id: [String, Number],
  text: String,
  completed: Boolean,
});
const emit = defineEmits(["delete-item", "update-completed"]);

const isCompleted = ref(todoItemProps.completed);

const deleteItem = () => {
  emit("delete-item", todoItemProps.id);
};

const updateCompleted = () => {
  emit("update-completed", todoItemProps.id, isCompleted.value);
};
watch(
  () => todoItemProps.completed,
  (newValue) => {
    isCompleted.value = newValue;
  }
);
</script>
<template>
  <li
    className="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors"
  >
    <div className="flex items-center">
      <input
        v-model="isCompleted"
        @change="updateCompleted"
        type="checkbox"
        className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
      />
      <span
        :class="{ 'line-through': isCompleted }"
        :style="isCompleted ? 'text-decoration: line-through;' : ''"
        >{{ todoItemProps.text }}</span
      >
    </div>
    <button
      className="text-red-500 hover:text-red-700 ml-4"
      @click="deleteItem"
    >
      Delete
    </button>
  </li>
</template>
<style></style>

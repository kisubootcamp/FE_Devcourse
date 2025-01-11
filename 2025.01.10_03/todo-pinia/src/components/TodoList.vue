<script setup>
import TodoListItem from "./TodoListItem.vue";

const todoListProps = defineProps({
  listItems: Array,
});
const emit = defineEmits(["delete-item", "update-completed"]);

const handleDeleteItem = (id) => {
  emit("delete-item", id);
};

const handleUpdateCompleted = (id, completed) => {
  emit("update-completed", id, completed);
};
</script>
<template>
  <ul className="divide-y divide-gray-200">
    <TodoListItem
      v-for="listItem in listItems"
      :key="listItem.id"
      :id="listItem.id"
      :text="listItem.text"
      :completed="listItem.completed"
      @delete-item="handleDeleteItem"
      @update-completed="handleUpdateCompleted"
    />
  </ul>
</template>
<style></style>

<script>
import TodoListItem from "./TodoListItem.vue";

export default {
  components: {
    TodoListItem,
  },
  props: ["listItems"],
  data() {
    return {};
  },
  methods: {
    handleDeleteItem(id) {
      this.$emit("delete-item", id);
    },
    handleUpdateCompleted(id, completed) {
      this.$emit("update-completed", id, completed);
    },
  },
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

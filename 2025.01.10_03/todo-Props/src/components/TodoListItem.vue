<script>
export default {
  props: ["id", "text", "completed"],
  data() {
    return {
      isCompleted: this.completed,
    };
  },
  methods: {
    deleteItem() {
      this.$emit("delete-item", this.id);
    },
    updateCompleted() {
      this.$emit("update-completed", this.id, this.isCompleted);
    },
  },
  watch: {
    completed(newValue) {
      this.isCompleted = newValue;
    },
  },
};
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
        >{{ text }}</span
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

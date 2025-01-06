<script>
export default {
  name: "EX3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index }} - {{ item }} - {{ item.length }}
      </li>
    </ul>
  </div>
</template>
<style></style>

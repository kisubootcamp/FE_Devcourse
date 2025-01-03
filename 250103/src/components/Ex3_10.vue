<script>
export default {
  name: "Ex3_10",
  data() {
    return {
      items: ["Apple", "Banana", "Orange"],
    };
  },
};
</script>
<template>
  <ul>
    <li v-for="(item, key) in items" :key>
      {{ item }}의 길이는 {{ item.length }} 입니다.
    </li>
  </ul>
</template>
<style scoped></style>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
<template>
  <slot name="header"></slot>
  <!-- 혼합 슬롯(이름 없는 + 이름 있는) -->
  <slot></slot>
  <slot name="footer"></slot>
</template>
<style scoped></style>

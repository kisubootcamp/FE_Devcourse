<script>
export default {
  name: "Ex2_3",
  data() {
    return {
      authority: "viewer",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="authority === 'admin'">관리자 메뉴를 표시</p>
    <p v-else-if="authority === 'editor'">편집자 메뉴를 표시</p>
    <p v-else>읽기 전용 메뉴를 표시</p>
  </div>
</template>
<style></style>

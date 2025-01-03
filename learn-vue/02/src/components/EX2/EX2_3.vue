<script>
export default {
  name: "EX2_3",
  data() {
    return {
      authority: "admin",
    };
  },
};
</script>
<template>
  <p v-if="authority === 'admin'">관리자 메뉴</p>
  <p v-else-if="authority === 'editor'">편집자 메뉴</p>
  <p v-else>읽기 전용 메뉴</p>
</template>
<style></style>

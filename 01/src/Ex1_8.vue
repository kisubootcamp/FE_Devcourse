<script>
export default {
  name: "Ex1_8",
  data() {
    return {
      status: "loginingIn",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="status === 'loginingIn'">로그인 중</p>
    <p v-else-if="status === 'loginNeeded'">로그인 필요</p>
    <p v-else>비밀번호 오류</p>
  </div>
</template>
<style></style>

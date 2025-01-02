<script>
export default {
  name: "Ex10",
  data() {
    return {
      status: "loading", // 'loading' | 'error' | 'success' | 'idle'
    };
  },
};
</script>
<template>
  <h2>1. 다중 조건부 렌더링</h2>
  <p v-if="status === 'loading'">Loading...</p>
  <p v-if="status === 'error'">Error</p>
  <p v-if="status === 'success'">Success</p>
  <p v-if="status === 'idle'">Idle...</p>
</template>

<style scoped></style>

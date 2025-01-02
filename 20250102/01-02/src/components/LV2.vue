<script>
export default {
  name: "LV2",
  data() {
    return {
      state: "loading",
      loading: "데이터를 로딩 중입니다...",
      error: "에러가 발생했습니다.",
      success: "데이터 로딩 완료!",
      idle: "대기 중",
    };
  },
};
</script>
<template>
  <div>
    <p v-if="state === 'loading'">{{ loading }}</p>
    <p v-else-if="state === 'error'">{{ error }}</p>
    <p v-else-if="state === 'success'">{{ success }}</p>
    <p v-else>{{ idle }}</p>
  </div>
  <div>
    
  </div>
</template>

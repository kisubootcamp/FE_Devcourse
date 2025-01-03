<script>
export default {
  name: 'Ex1',
  data() {
    return {
      isTrue: true,
      weather: "rainy",
      message: "<strong>HTML을 출력합니다!</strong>",
      message2: "HTML을 출력합니다!",
      isGreeting: false,
       status: 'error',
    };
  },
  methods: {
    click() {
     this.isTrue = !this.isTrue;
    },
  },
};
</script>
<template>
  <!-- 문1 -->
  <h1 v-if="isTrue">조건이 참입니다!</h1>
  <button @click="click">클릭</button>
  <!-- 문2 -->
  <h1 v-if="weather === 'sunny'">오늘은 화창하네요</h1>
  <h1 v-else-if="weather === 'rainy'">오늘은 비가 오네요</h1>
  <h1 v-else-if="weather === 'cloudy'">오늘은 구름이 많네요</h1>
  <h1 v-else>날씨 정보 없음</h1>
  <!-- 문3 -->
  <div v-html="message"></div>
  <!-- 문4 -->
  <div v-text="message"></div>
  <!-- 문5 -->
  <div v-show="isTrue">조건이 참입니다!</div>
  <!-- 문6 -->
  <div v-text="message"></div>
  <!-- 문7 -->
  <div v-if="isGreeting">Hello</div>
  <div v-if="!isGreeting">Goodbye</div>
  <!-- 문8 -->
  <div v-if="status === 'loading'">로그인 중</div>
  <div v-else-if="status === 'required'">로그인 필요</div>
  <div v-else>비밀번호 오류</div>
  <!-- 문9 -->
  <div v-html="message"></div>
  <div v-html="message2"></div>
  <div v-text="message"></div>
  <div v-text="message2"></div>
</template>
<style scoped></style>

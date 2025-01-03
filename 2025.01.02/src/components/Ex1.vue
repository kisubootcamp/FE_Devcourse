<script>
export default {
  name: "Ex1",
  data() {
    return {
      weather: "sunny",
      printString: "<strong>HTML을 출력합니다!</strong>",
      message: "메세지입니다",
      isVisible: true,
      isGreeting: true,
      loginStatus: true,
      hobby: "<em>공연보러가기<em/>",
    };
  },
};
</script>
<template>
  <!-- 연습문제 1 -->
  <div v-if="true">조건이 참입니다</div>

  <!-- 연습문제 2 -->
  <div v-if="weather === 'sunny'">화창한 날씨입니다</div>
  <div v-else-if="weather === 'rainy'">비가오는 날씨입니다</div>
  <div v-else="weather === 'cloudy'">흐린 날씨입니다</div>

  <!-- 연습문제 3 -->
  <div v-html="printString"></div>

  <!-- 연습문제 4 -->
  <div v-text="message"></div>

  <!-- 연습문제 5 -->
  <div v-show="isVisible">조건이 참입니다!</div>

  <!-- 연습문제 6 -->

  <!-- 연습문제 7 -->
  <!-- <div v-if="isGreeting === true">Hello</div> -->
  <!-- <div v-if="isGreeting === false">Goodbye</div> -->
  <div v-if="isGreeting">Hello</div>
  <div v-if="!isGreeting">Goodbye</div>

  <!-- 연습문제 8 -->
  <div v-if="loginStatus === true">로그인중</div>
  <div v-else-if="loginStatus === false">로그인 필요</div>
  <div v-else>비밀번호 오류</div>

  <!-- 연습문제 9 -->
  <div v-html="hobby"></div>
  <div v-text="hobby"></div>
</template>
<style scoped></style>

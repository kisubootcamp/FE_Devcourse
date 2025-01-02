<script>
import Success from "./2-1/Success.vue";
import Loading from "./2-1/Loading.vue";
import Idle from "./2-1/Idle.vue";
import Error from "./2-1/Error.vue";

export default {
  name: "App",
  data() {
    return {
      isActive: false,
      weather: "cloudy",
      html: "<strong>HTML을 출력합니다!</strong>",
      message: "메시지입니다.",
      isGreeting: true,
      loginType: "need",
      htxt: "<p>텍스트</p>",
      isHtml: true,
      access: "admin",
      isLogin: "loggedOut",
      grade: "basic",
      selectedOption: "italic",
      buy: "inCart",
      choice: "h",
      hText: '<p style="color:red">asd</p>',
    };
  },
  methods: {
    setIsActive() {
      this.isActive = true;
    },
  },
  components: { Success, Loading, Idle, Error },
};
</script>

<template>
  <!-- 1-1 -->
  <button @click="setIsActive">버튼</button>
  <p v-if="isActive">조건이 참입니다!</p>
  <!-- 1-2 -->
  <p v-if="weather === 'sunny'">맑음</p>
  <p v-else-if="weather === 'rainy'">비가 내림</p>
  <p v-else-if="weather === 'cloudy'">구름 낌</p>
  <!-- 1-3 -->
  <article v-html="html"></article>
  <!-- 1-4 -->
  <p v-text="message"></p>
  <!-- 1-5 -->
  <p v-show="isActive">조건이 참입니다!</p>
  <!-- 1-6 -->
  <p v-text="(message = '이게 되네')"></p>
  <!-- 1-7 -->
  <p v-if="isGreeting">Hello</p>
  <p v-else-if="!isGreeting">Goodbye</p>
  <!-- 1-8 -->
  <p v-if="loginType === 'ing'">로그인중</p>
  <p v-else-if="loginType === 'need'">로그인 필요</p>
  <p v-else-if="loginType === 'incorrect'">비밀번호 틀림</p>
  <!-- 1-9 -->
  <p v-html="htxt"></p>
  <p v-text="'텍스트'"></p>
  <!-- 2-1 -->
  <Loading />
  <Success />
  <Idle />
  <Error />
  <!-- 2-2 -->
  <p v-if="isHtml" v-html="'<b>HTML을 사용한 텍스트</b>'"></p>
  <p v-else-if="!isHtml" v-html="'HTML을 사용하지 않은 텍스트'"></p>
  <!-- 2-3 -->
  <p v-if="(access = 'admin')">관리자 메뉴</p>
  <p v-else-if="(access = 'editor')">편집자 메뉴</p>
  <p v-else-if="(access = 'viewer')">읽기 전용 메뉴</p>
  <!-- 2-4 -->
  <p v-if="isLogin === 'banned'">계정 정지</p>
  <p v-else-if="isLogin === 'loggedOut'">로그인 필요</p>
  <p v-else-if="isLogin === 'loggedIn' && grade === 'premium'">
    프리미엄 계정으로 로그인 중
  </p>
  <p v-else-if="isLogin === 'loggedIn' && grade === 'basic'">
    기본 계정으로 로그인 중
  </p>
  <!-- 2-5 -->
  <article
    v-if="selectedOption === 'bold'"
    v-html="'<strong>텍스트</strong>'"
  ></article>
  <article
    v-if="selectedOption === 'italic'"
    v-html="'<i>텍스트</i>'"
  ></article>
  <!-- 2-6 -->
  <p v-if="buy === 'inCart'">장바구니에 상품이 있습니다.</p>
  <p v-else-if="buy === 'purchased'">구매 완료</p>
  <p v-else-if="buy === 'abandoned'">구매가 취소되었습니다.</p>
  <!-- 2-7 -->
  <p v-if="choice === 'h'" v-html="hText"></p>
  <p v-if="choice === 'n'" v-text="hText"></p>
</template>

<style scoped></style>

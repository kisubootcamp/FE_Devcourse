<script>
export default {
  name: "Ex2",
  data() {
    return {
      status: "loading",
      isHtml: true,
      htmlText: "<b>HTML을 사용한 텍스트</b>",
      text: "HTML을 사용하지 않은 텍스트",
      authority: "admin",
      loginStatus: "loggedIn",
      account: "basic",
      selectedOption: "italic",
      boldText: "<strong>텍스트</strong>",
      italicText: "<em>텍스트</em>",
      purchaseStatus: "inCart",
      highlightedText: "<span style='color:red'>하이라이트된 텍스트</span>",
      plainText: "일반텍스트",
    };
  },
};
</script>
<template>
  <!-- 연습문제 1 -->
  <div v-if="status === 'loading'">데이터를 로딩 중입니다...</div>
  <div v-else-if="status === 'error'">에러가 발생했습니다.</div>
  <div v-else-if="status === 'success'">데이터 로딩 완료!</div>
  <div v-else="idle">대기 중</div>

  <!-- 연습문제 2 -->
  <div v-if="isHtml === true" v-html="htmlText"></div>
  <div v-else v-text="text"></div>

  <!-- 연습문제 3 -->
  <div v-if="authority === 'admin'">관리자 메뉴</div>
  <div v-else-if="authority === 'editor'">편집자 메뉴</div>
  <div v-else-if="authority === 'viewer'">읽기 전용 메뉴</div>

  <!-- 연습문제 4 -->
  <div v-if="loginStatus === 'loggedIn' && account === 'basic'">
    기본 계정으로 로그인 중
  </div>
  <div v-else-if="loginStatus === 'loggedIn' && account === 'premium'">
    프리미엄 계정으로 로그인 중
  </div>
  <div v-else-if="loginStatus === 'loggedOut'">로그인 필요</div>
  <div v-else-if="loginStatus === 'banned'">계정 정지</div>

  <!-- 연습문제 5 -->
  <div v-if="selectedOption === 'bold'" v-html="boldText"></div>
  <div v-else-if="selectedOption === 'italic'" v-html="italicText"></div>

  <!-- 연습문제 6 -->
  <div v-if="purchaseStatus === 'inCart'">장바구니에 상품이 있습니다.</div>
  <div v-else-if="purchaseStatus === 'purchased'">구매완료</div>
  <div v-else-if="purchaseStatus === 'abandoned'">구매가 취소되었습니다.</div>

  <!-- 연습문제 7 -->
  <div v-html="highlightedText"></div>
  <div v-text="plainText"></div>
</template>
<style scoped></style>

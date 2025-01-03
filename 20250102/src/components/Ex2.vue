<script>
export default {
  name: 'Ex2',
  data() {
    return {
      status: 'loading', //error, success, idle
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용한 텍스트',
      role: "admin", //"admin", "editor", "viewer"
      status2: "loggedIn", //"loggedIn", "loggedOut", "banned"
      account: "basic", //"basic", "premium"
      selectedOption: "bold", //"bold", "italic"
      messageHTML: "<strong>텍스트</strong>",
      messageItalic: "<em>텍스트</em>",
      status: "inCart", //"inCart", "purchased", "abandoned"
      highlitedText: '<span style="color:red">하이라이트 텍스트</span>',
      normalText: "일반텍스트",
    };
  },
};
</script>
<template>
  <!-- 문1 -->
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다..."</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기 중</h1>
  <!-- 문2 -->
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
  <!-- 문3 -->
  <!-- !!권한에 따라 서로 다른 메뉴를 보여줄 때 사용 -->
  <div v-if="role === 'admin'">관리자 메뉴</div>
  <div v-if="role === 'editor'">편집자 메뉴를 표시</div>
  <div v-if="role === 'viewer'">읽기 전용 메뉴를 표시</div>
  <!-- 문4 -->
  <h1 v-if="status2 === 'loggedIn' && account === 'basic'">
    기본 계정으로 로그인 중
  </h1>
  <h1 v-if="status2 === 'loggedIn' && account === 'premium'">
    프리미엄 계정으로 로그인 중
  </h1>
  <h1 v-if="status2 === 'loggedOut'">로그인 필요</h1>
  <h1 v-if="status2 === 'banned'">계정정지</h1>
  <!-- 문5 -->
  <h1 v-if="selectedOption === 'bold'" v-html="messageHTML"></h1>
  <h1 v-else-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <!-- 문6 -->
  <h1 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status === 'purchased'">구매 완료</h1>
  <h1 v-else-if="status === 'abandoned'">구매가 취소되었습니다</h1>
  <!-- 문7 -->
  <p v-html="highlitedText"></p>
  <p v-html="normalText"></p>
</template>
<style scoped></style>

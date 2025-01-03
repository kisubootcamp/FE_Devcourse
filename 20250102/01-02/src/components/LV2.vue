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
      isHtml: false,
      auth: "admin",
      isBanned: false,
      isLogin: true,
      rank: "basic",
      selectedOption: "italic",
      text: "야호",
      userStatus: "inCart",
      text1: '<strong>Hello</strong>',
      text2: 'Hello',
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
    <p v-if="isHtml"><b>HTML을 사용한 텍스트</b></p>
    <p v-else>HTML을 사용하지 않은 텍스트</p>
  </div>
  <div>
    <p v-show="auth === 'admin'">관리자 메뉴</p>
    <p v-show="auth === 'editor'">편집자 메뉴</p>
    <p v-show="auth === 'viewer'">읽기 전용 메뉴</p>
  </div>
  <div>
    <div v-if="isBanned">
      <p>계정 정지</p>
    </div>
    <div v-else>
      <div v-if="isLogin">
        <p v-if="rank === 'basic'">기본 계정으로 로그인 중</p>
        <p v-else>프리미엄 계정으로 로그인 중</p>
      </div>
      <div v-else>로그인 필요</div>
    </div>
  </div>
  <div>
    <div v-if="selectedOption === 'bold'">
      <strong>{{ text }}</strong>
    </div>
    <div v-else-if="selectedOption === 'italic'">
      <em>{{ text }}</em>
    </div>
    <div v-else>{{ text }}</div>
  </div>
  <div>
    <p v-show="userStatus === 'inCart'">장바구니에 상품이 있습니다</p>
    <p v-show="userStatus === 'purchased'">구매 완료</p>
    <p v-show="userStatus === 'abandoned'">구매가 취소되었습니다</p>
  </div>
  <div>
    <p v-html="text1"></p>
    <p v-text="text2"></p>
  </div>
</template>

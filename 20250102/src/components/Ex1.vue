<script>
export default {
  name: "Ex1",
  data() {
    return {
      // Q1_1
      isVisible: false,
      // Q1_2
      weather: "sunny",
      // Q1_3
      paragraph: "<strong>HTML을 출력합니다!</strong>",
      // Q1_4
      message: "text 출력",
      // Q1_5
      condition: true,
      // Q1_6
      message6: "텍스트",
      // Q1_7
      isGreeting: true,
      // Q1_8
      status: "loading",
      // Q1_9
      mixHtml: "<strong>html 태그 출력</strong>",
      mixText: "텍스트 출력",
      // Q2_1
      status2: "error",
      // Q2_2
      isHtml: true,
      mixHtml2: "<strong>html 태그 출력</strong>",
      mixText2: "텍스트 출력",
      // Q2_3
      role: "admin",
      // Q2_4
      userStatus: "loggedIn",
      userAccount: "premium",
      // Q2_5
      selectedOption: "bold",
      boldText: "<strong>strong 텍스트</strong>",
      italicText: "<em>em 텍스트</em>",
      commonText: "일반 텍스트",
      // Q2_6
      purchaseStatus: "purchased",
      // Q2_7
      highlightedText: '<span style="color: blue;">하이라이트된 텍스트</span>',
      normalText: "일반 텍스트",
    };
  },
  methods: {
    // Q1_1
    toggleButton() {
      this.isVisible = true;
    },
  },
};
</script>
<template>
  <div>
    <!-- Q1_1 -->
    <button @click="toggleButton">클릭</button>
    <p v-if="isVisible">조건이 참입니다!</p>
    <!-- Q1_2 -->
    <p v-if="weather === 'sunny'">sunny</p>
    <p v-else-if="weather === 'rainy'">rainy</p>
    <p v-else-if="weather === 'cloudy'">cloudy</p>
    <p v-else>unknown</p>
    <!-- Q1_3 -->
    <div v-html="paragraph"></div>
    <!-- Q1_4 -->
    <p v-text="message"></p>
    <!-- Q1_5 -->
    <p v-show="condition">조건이 참입니다!</p>
    <p v-show="!condition">조건이 거짓입니다!</p>
    <!-- Q1_6 -->
    <p v-text="message6"></p>
    <!-- Q1_7 -->
    <p v-if="isGreeting">Hello</p>
    <p v-else>Goodbye</p>
    <!-- Q1_8 -->
    <p v-if="status === 'loading'">로그인 중</p>
    <p v-else-if="status === 'loginRequired'">로그인 필요</p>
    <p v-else-if="status === 'passwordError'">비밀번호 오류</p>
    <p v-else>unknown</p>
    <!-- Q1_9 -->
    <div v-html="mixHtml"></div>
    <p v-text="mixText"></p>
  </div>
  <div>
    <!-- Q2_1 -->
    <p v-if="status2 === 'loading'">데이터를 로딩 중입니다...</p>
    <p v-else-if="status2 === 'error'">에러가 발생했습니다.</p>
    <p v-else-if="status2 === 'success'">데이터 로딩 완료!</p>
    <p v-else>대기 중</p>
    <!-- Q2_2 -->
    <div v-if="isHtml" v-html="mixHtml2"></div>
    <div v-else v-text="mixText2"></div>
    <!-- Q2_3 -->
    <p v-if="role === 'admin'">관리자 메뉴</p>
    <p v-else-if="role === 'editor'">편집자 메뉴</p>
    <p v-else>읽기 전용 메뉴</p>
    <!-- Q2_4 -->
    <p v-if="userStatus === 'loggedIn' && userAccount === 'basic'">
      기본 계정으로 로그인 중
    </p>
    <p v-else-if="userStatus === 'loggedIn' && userAccount === 'premium'">
      프리미엄 계정으로 로그인 중
    </p>
    <p v-else-if="userStatus === 'loggedOut'">로그인 필요</p>
    <p v-else-if="userStatus === 'banned'">계정 정지</p>
    <!-- Q2_5 -->
    <div v-if="selectedOption === 'bold'" v-html="boldText"></div>
    <div v-else-if="selectedOption === 'italic'" v-html="italicText"></div>
    <div v-else>{{ commonText }}</div>
    <!-- Q2_6 -->
    <p v-if="purchaseStatus === 'inCart'">장바구니에 상품이 있습니다.</p>
    <p v-else-if="purchaseStatus === 'purchased'">구매 완료</p>
    <p v-else-if="purchaseStatus === 'abandoned'">구매가 취소되었습니다</p>
    <p v-else>아무 일도 일어나지 않았습니다.</p>
    <!-- Q2_7 -->
    <div v-html="highlightedText"></div>
    <div v-text="commonText"></div>
  </div>
</template>

<style scoped></style>

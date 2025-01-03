<script>
export default {
  name: "LV1",
  data() {
    return {
      message1: "조건이 참입니다!",
      message2: "기수쌤 짱짱맨",
      message3: "아무 문자",
      wheather: "rainy",
      isActive: false,
      innerHtml: "<strong>HTML을 출력합니다!</strong>",
      isShown: false,
      isGreeting: false,
      state: 2,
      text1: "hello",
      text2: "<strong>hello</strong>",
    };
  },
  methods: {
    buttonHandler() {
      this.isActive = true;
    },
    resetHandler() {
      this.isActive = false;
    },
    showText() {
      this.isShown = !this.isShown;
    },
    toggleGreeting() {
      this.isGreeting = !this.isGreeting;
    },
    changeState() {
      this.state = this.state === 0 ? 1 : 0;
    },
  },
};
</script>
<template>
  <div>
    <button @click="buttonHandler">보여주기</button>
    <button @click="resetHandler">초기화</button>
    <p v-if="isActive">{{ message1 }}</p>
  </div>
  <div>
    <p v-if="wheather === 'sunny'">sunny</p>
    <p v-else-if="wheather === 'rainy'">rainy</p>
    <p v-else>cloudy</p>
  </div>
  <div v-html="innerHtml"></div>
  <div>
    <p v-text="message2"></p>
  </div>
  <div>
    <button @click="showText">토글</button>
    <p v-show="isShown">조건이 참입니다.</p>
  </div>
  <div>
    <p v-text="message3"></p>
  </div>
  <div>
    <p v-if="isGreeting">Hello</p>
    <p v-else>Goodbye</p>
    <button @click="toggleGreeting">토글</button>
  </div>
  <div>
    <p v-if="state === 0">로그인 중</p>
    <p v-else-if="state === 1">로그인 필요</p>
    <p v-else>비밀번호 오류</p>
    <button @click="changeState">상태변경 버튼</button>
  </div>
  <div>
    <p v-text="text1"></p>
    <p v-html="text2"></p>
  </div>
</template>

<script>
import Ex1 from "./components/Ex1.vue";
import EX2 from "./components/EX2.vue";
import Ex3 from "./components/Ex3.vue";
import Ex4 from "./components/Ex4.vue";
import Ex5 from "./components/Ex5.vue";
import Ex6 from "./components/Ex6.vue";
import Ex7 from "./components/Ex7.vue";

export default {
  name: "App",
  data() {
    return {
      clicked: false,
      weather: "rainy",
      html: "<strong>HTML을 출력합니다!</strong>",
      message: "hi",
      isVisible: true,
      isGreeting: true,
      state: 0,

      htmlContent:
        '<p style="color: red;">이것은 <strong>HTML</strong> 내용입니다.</p>',
      plainTextContent: "이것은 텍스트입니다.",
    };
  },
  methods: {
    handleClick() {
      this.clicked = true;
    },
  },
  components: {
    Ex1,
    EX2,
    Ex3,
    Ex4,
    Ex5,
    Ex6,
    Ex7,
  },
};
</script>
<template>
  <button @click="handleClick">버튼1</button>
  <p v-if="clicked">조건이 참입니다!</p>

  <p v-if="weather === 'sunny'">sunny</p>
  <p v-else-if="weather === 'rainy'">rainy</p>
  <p v-else>cloudy</p>

  <h2 v-html="html"></h2>

  <h2 v-text="message"></h2>

  <p v-show="isVisible">조건이 참입니다!</p>

  <p v-if="isGreeting">Hello</p>
  <p v-else>Goodbye</p>

  <p v-if="state === 0">로그인 중</p>
  <p v-else-if="state === 1">로그인 필요</p>
  <p v-else>비밀번호 오류</p>

  <div v-html="htmlContent"></div>
  <div v-text="plainTextContent"></div>

  <Ex1 />
  <EX2 />
  <Ex3 />
  <Ex4 />
  <Ex5 />
  <Ex6 />
  <Ex7 />
</template>
<style scoped></style>

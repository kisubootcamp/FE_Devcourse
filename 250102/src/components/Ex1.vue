<template>
  <div>
    <button @click="toggle"> 버튼 </button>
    <p v-if="isVisible">조건이 참입니다!</p>
    <hr/>
  </div>
  <div>
    <h2>오늘의 날씨는</h2>
    <p v-if="weather === 'sunny'">Sunny</p>
    <p v-else-if="weather === 'rainy'">rainy</p>
    <p v-else-if="weather === 'cloudy'">cloudy</p>

    <button @click="changeWeather('sunny')">☀</button>
    <button @click="changeWeather('rainy')">🌧</button>
    <button @click="changeWeather('cloudy')">☁</button>
    <hr/>
  </div>
  <div>
    <h2> HTML 렌더링 </h2>
    <p v-html="htmlContent"></p>
    <hr/>
  </div>
  <div>
    <h2>v-text</h2>
    <p v-text="message"></p>
    <hr/>
  </div>
  <div>
    <h2>v-show</h2>
    <p v-show="isVisible2">까꿍!</p>
    <button @click="toggle">(っ °Д °;)っ</button>
    <hr/>
  </div>
  <div>
    <h2>빈 문자열 텍스트 변경</h2>
    <p v-text="message"></p>
    <hr/>
  </div>
  <div>
    <h2>동적 조건부 렌더링</h2>
    <p v-if="isGreeting === true">Hello</p>
    <p v-else="isGreeting === false">Goodbye</p>
    <button @click="changeGreeting"> 자 인사~ </button>
    <hr/>
  </div>
  <div>
    <p v-if="state==='로그인'"> 회원이시군요! </p>
    <p v-else-if="state==='로그인 필요'"> 가입해주세요! </p>
    <p v-else="state==='비밀번호 오류'"> 어딘가 틀렸어요! </p>
    <button @click="changeState('로그인 필요')"> 로그아웃 </button>
    <button @click="changeState('로그인')"> 로그인 </button>
    <button @click="changeState('비밀번호 오류')"> 비밀번호 검사 </button>
    <hr/>
  </div>
  <div>
    <p v-html="htmlContent"></p>
    <p v-text="exText"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, 
      isVisible2: false,
      weather: '',
      htmlContent: "<strong>나는 HTML이다.</strong>",
      message: "난 그래도 React가 더 좋아",
      isGreeting: true,
      state: '로그인',
      exText: '나는 순수혈통',
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
      this.isVisible2 = !this.isVisible2;
    },
    changeWeather(newWeather) {
      this.weather = newWeather;
    },
    changeGreeting(){
      this.isGreeting = !this.isGreeting;
    },
    changeState(newState){
      this.state = newState;
    }
  },
};
</script>

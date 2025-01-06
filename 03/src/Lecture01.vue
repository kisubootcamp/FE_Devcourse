<script>
export default {
  name: "Lecture01",
  data() {
    return {
      count: 0,

      email: "",
      password: "",

      query01: "",
      query02: "",
      query03: "",

      name: "john",
      age: 20,
      gender: "male",
    };
  },
  methods: {
    // 이벤트를 정의할 때는 methods 안에 함수를 정의하고 v-on:event 속성과 사용!
    decrement(event) {
      this.count--;
      console.log(event);
    },
    increment() {
      this.count++;
    },
    reset() {
      if (this.count === 0) return;
      this.count = 0;
    },
    incrementByAmount(amount) {
      this.count = this.count + amount;
    },
    handleSubmit() {
      console.log(this.email);
      console.log(this.password);
    },
    handleSearch() {
      if (this.query01 === "") return;
      console.log(this.query01 + " 검색중...");
    },
    handleKeyUp() {
      if (this.query02 === "") return;
      console.log(this.query02 + " 검색중...");
    },
    handleInput($event) {
      this.query03 = $event.target.value;
    },
  },
};
</script>
<template>
  <h1>수업 01_이벤트</h1>
  <h2>{{ count }}</h2>
  <!--
    # v-on 속성은 @로 축약 가능
      v-on:click -> @click

    # count의 값을 직접적(인라인)으로 조작하는 것도 가능함
      @click="count = count -1"

    # 수식어 : 이벤트에 보조적인 의미를 부여해주는 것
      문법
      - @이벤트타입.수식어="이벤트헨들러"

      수식어 종류
      - once : 이벤트가 한 번만 호출됨
      - prevent : 기본 이벤트 취소
      - enter : 엔터키를 입력했을 때만 이벤트가 동작

      ! 수식어는 조합해서 사용할 수 있다(조합 순서가 연관이 없진 않음)
      @keyup.ctrl.enter="이벤트헨들러"

    # v-memo
      아래와 같이 작성하면 div 영역 안에서 name의 속성이 변경되기 전까지 렌더링 X
  -->
  <button @click.once="decrement($event)">감소</button>
  <button @click="increment">증가</button>
  <button @click="reset">리셋</button>
  <button @click="incrementByAmount(10)">10씩 증가</button>

  <form @submit="handleSubmit">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">로그인</button>
  </form>

  <form @submit.prevent="handleSearch">
    <h3>form 태그가 있는 경우</h3>
    <input type="text" v-model="query01" />
    <button type="button">검색</button>
  </form>

  <h3>form 태그가 없는 경우</h3>
  <input type="text" v-model="query02" @keyup.enter="handleKeyUp" />

  <h3>한글(조합문자) 가져올 때 문제점과 해결 방법</h3>
  <!--
    조합문자의 실시간 입력을 처리할 때는 v-model을 사용하여 처리할 수 없음
    따라서 리액트처럼 value로 처리해줘야 함
  -->
  <input type="text" :value="query03" @input="handleInput" />
  <p>{{ query03 }}</p>

  <div v-memo="[name]">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ gender }}</h2>
  </div>
  <button @click="name = 'mary'">이름 변경</button>
  <button @click="age = 30">나이 변경</button>
  <button @click="gender = 'female'">성별 변경</button>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ gender }}</h2>
</template>
<style scoped>
h2 {
  margin-bottom: 5px;
}
h3 {
  margin-top: 10px;
}
form {
  margin-top: 20px;
}
input {
  width: 150px;
  height: 30px;
  border: 1px solid rgb(182, 182, 182);

  margin-right: 10px;
}
button {
  padding: 3px 10px;
  margin-right: 5px;
  background-color: rgb(182, 182, 182);
  border-radius: 4px;
}
div {
  margin-top: 20px;
}
</style>

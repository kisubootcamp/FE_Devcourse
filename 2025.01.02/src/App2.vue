<script>
// 옵션스api
// export default {}; //기본적인 형태
export default {
  name: "App", //컴포넌트 이름이랑 같게 적어주면됨 why? 디버깅을 쉽게하기 위해서!
  // data: function () {
  //   //data() {}로 단축
  //   return {
  //     message: "Hello, World",
  //     age: 20,
  //     likeFoods: ["apple", "banana"],
  //     address: {
  //       zipcode: 131000,
  //       city: "seoul",
  //     },
  //   }; //여기서 내보낸 객체 값을 template에서 사용할수 있는 것임임
  // },
  // data() {
  //   return {
  //     message: "Hello World",
  //     name: "<em>김철수<em/>",
  //   };
  // },
  data() {
    return {
      id: "header",
      isActive: "false",
    };
  },
};
</script>
<template>
  <!-- 데이터 보간법 {{}}  콧수염 문법(Mustache syntax) -->
  <!-- <h1>{{ message }}</h1>
  <h1>{{ 10 + 20 }}</h1>
  <h1>{{ message.toUpperCase() }}</h1>
  <h1>{{ likeFoods }}</h1>
  <h1>{{ likeFoods[0] }}</h1>
  <h1>{{ address }}</h1>
  <h1>{{ address.zipcode }}</h1>
  <h1>{{ address.city }}</h1> -->
  <!-- 디렉티브(directive), v-[] -->
  <h1>{{ message }}</h1>
  <h1 v-html="message"></h1>
  <h1 v-text="message"></h1>
  <h1>{{ name }}</h1>
  <h1 v-html="name"></h1>
  <h1 v-text="name"></h1>
  <h1 v-pre>{{ name }}</h1>
  <div v-pre>
    <h1 v-html="name">ddd</h1>
    <!-- 컴파일을 건너뛰기에 문법적 오류가 있음에도 걸리지X -->
  </div>
  <!-- 축약 속성성으로 : 사용 -->
  <main v-bind:id="main">
    <!-- <main :id="main"> -->
    <h1>Hello</h1>
    <h1 :class="isActive ? 'active' : 'inactive'">condition</h1>
  </main>
</template>
<!-- <style>
h1 {
  color: skyblue;
}
.active {
  color: black;
}
.inactive {
  color: pink;
}
</style> -->

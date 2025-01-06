<script>
export default {
  name: "Lecture02",
  data() {
    return {
      firstName: "Subin",
      lastName: "Lee",

      author: {
        name: "sucoding",
        books: [
          "핵심만 골라 배우는 HTML+CSS+Javascript",
          "아는만큼보이는 프런트엔드 개발",
          "핵심만 골라 배우는 Vue.JS",
        ],
      },
    };
  },
  computed: {
    fullName() {
      return `${this.lastName} ${this.firstName}`;
    },
  },
  methods: {
    getFullName() {
      return `${this.lastName} ${this.firstName}`;
    },
  },
};
</script>
<template>
  <h1>수업 02_Computed</h1>
  <h2>함수를 사용하는 경우 : {{ getFullName() }}</h2>
  <!--
    # Computed
      - 함수처럼 정의하지만 변수처럼 사용할 수 있다
      - 데이터를 가공해야할 때 사용하도록 권장
      - 읽기 전용(값 변경 불가능)
  -->
  <h2>Computed를 사용하는 경우 : {{ fullName }}</h2>
</template>
<style></style>

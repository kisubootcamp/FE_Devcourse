<script>
export default {
  name: "Calculator",
  data() {
    return {
      output: null, //출력칸에 표시되는 사용자 노출값
      prev: null, //이전값
      cur: null, //현재값
      operator: null, //연산자
      buttons: [
        { value: "C", class: "clear" },
        { value: "/", class: "operator" },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: "*", class: "operator" },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: "+", class: "operator" },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: "-", class: "operator" },
        { value: ".", class: "dot" },
        { value: 0 },
        { value: "=", class: "operator result" },
      ],
    };
  },
  methods: {
    operation(e) {
      const n = e.target.value;
      if (n === "C") {
        this.output = null;
        this.prev = null;
        this.cur = null;
        this.operator = null;
        return;
      }

      if (["+", "-", "*", "/", "="].includes(n)) {
        //예외처리
        if (!this.cur && !this.prev) {
          alert("숫자를 먼저 입력하세요");
          return;
        }
        if (this.operator !== "" && !this.cur) {
          alert("사칙 연산 기호는 연달아 누를 수 없습니다");
          return;
        }
        if (n === "=" && this.prev === this.cur) {
          return;
        }

        this.cur = Number(this.cur);

        if (this.operator !== null) {
          switch (this.operator) {
            case "+":
              this.prev = this.prev + this.cur;
              break;
            case "-":
              this.prev = this.prev - this.cur;
              break;
            case "*":
              this.prev = this.prev * this.cur;
              break;
            case "/":
              this.prev = this.prev / this.cur;
              break;
          }

          if (n === "=") {
            this.output = this.prev;
            this.operator = null;
            this.cur = this.prev;
          } else {
            this.output = null;
            this.operator = n;
            this.cur = null;
          }

          return;
        }

        this.output = null; //화면 숫자 없애기
        this.operator = n;
        this.prev = Number(this.cur);
        this.cur = null;
        return;
      }

      this.cur = this.cur === null ? n : (this.cur += n);
      this.output = this.cur;
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input
        v-for="button in buttons"
        type="button"
        :class="button.class"
        :value="button.value"
        @click="operation($event)"
      />
    </form>
  </div>
</template>
<style scoped>
@import "@/assets/css/calculator.css";
</style>

<script>
import "./assets/css/style.css";

export default {
  data() {
    return {
      result: 0,
      equations: "",
      lastInput: "",
      isResultFinal: false, // 최종 결과 상태 여부
    };
  },
  methods: {
    onCalculating(e) {
      const value = e.target.value;

      if (value === "C") {
        this.result = 0;
        this.equations = "";
        this.lastInput = "";
        this.isResultFinal = false;
        return;
      }

      if (value === "=") {
        if (this.equations) {
          this.result = this.evaluateExpression(this.equations);
          this.equations = "";
          this.lastInput = this.result.toString();
          this.isResultFinal = true;
        }
        return;
      }

      if (["+", "-", "*", "/"].includes(value)) {
        if (this.isResultFinal) {
          this.equations = this.result.toString();
          this.isResultFinal = false;
        }

        if (!this.lastInput || ["+", "-", "*", "/"].includes(this.lastInput)) {
          return; // 연속 연산자 X
        }

        this.equations += value;
        this.lastInput = value;
        return;
      }

      if (!isNaN(value) || value === ".") {
        if (this.isResultFinal) {
          this.equations = "";
          this.isResultFinal = false;
        }

        this.equations += value;
        this.lastInput = value;

        this.result = this.evaluateExpression(this.equations);
      }
    },

    // 수식 평가
    evaluateExpression(expression) {
      const tokens = this.tokenize(expression);
      const postfix = this.infixToPostfix(tokens);
      return this.calculatePostfix(postfix);
    },

    // 숫자 ~ 연산자 분리
    tokenize(expression) {
      const regex = /\d+(\.\d+)?|[+\-*/]/g;
      return expression.match(regex) || [];
    },

    infixToPostfix(tokens) {
      const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
      const stack = [];
      const output = [];

      for (const token of tokens) {
        if (!isNaN(token)) {
          output.push(parseFloat(token)); // 숫자는 출력으로
        } else if (["+", "-", "*", "/"].includes(token)) {
          while (
            stack.length &&
            precedence[stack[stack.length - 1]] >= precedence[token]
          ) {
            output.push(stack.pop());
          }
          stack.push(token);
        }
      }

      while (stack.length) {
        output.push(stack.pop()); // 계산해주기~~
      }

      return output;
    },

    calculatePostfix(postfix) {
      const stack = [];

      for (const token of postfix) {
        if (typeof token === "number") {
          stack.push(token);
        } else {
          const b = stack.pop();
          const a = stack.pop();
          switch (token) {
            case "+":
              stack.push(a + b);
              break;
            case "-":
              stack.push(a - b);
              break;
            case "*":
              stack.push(a * b);
              break;
            case "/":
              stack.push(a / b);
              break;
          }
        }
      }

      return stack.pop() || 0; // 결과 반환
    },
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" :value="equations || result" readonly />
      <input type="button" class="clear" value="C" @click="onCalculating" />
      <input type="button" class="operator" value="/" @click="onCalculating" />
      <input type="button" value="1" @click="onCalculating" />
      <input type="button" value="2" @click="onCalculating" />
      <input type="button" value="3" @click="onCalculating" />
      <input type="button" class="operator" value="*" @click="onCalculating" />
      <input type="button" value="4" @click="onCalculating" />
      <input type="button" value="5" @click="onCalculating" />
      <input type="button" value="6" @click="onCalculating" />
      <input type="button" class="operator" value="+" @click="onCalculating" />
      <input type="button" value="7" @click="onCalculating" />
      <input type="button" value="8" @click="onCalculating" />
      <input type="button" value="9" @click="onCalculating" />
      <input type="button" class="operator" value="-" @click="onCalculating" />
      <input type="button" class="dot" value="." @click="onCalculating" />
      <input type="button" value="0" @click="onCalculating" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="onCalculating"
      />
    </form>
  </div>
</template>

<style></style>

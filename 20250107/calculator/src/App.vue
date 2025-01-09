<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" v-model="output" readonly />
      <input type="button" class="clear" value="C" @click="clearOutput" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="appendValue('/')"
      />
      <input type="button" value="1" @click="appendValue('1')" />
      <input type="button" value="2" @click="appendValue('2')" />
      <input type="button" value="3" @click="appendValue('3')" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="appendValue('*')"
      />
      <input type="button" value="4" @click="appendValue('4')" />
      <input type="button" value="5" @click="appendValue('5')" />
      <input type="button" value="6" @click="appendValue('6')" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="appendValue('+')"
      />
      <input type="button" value="7" @click="appendValue('7')" />
      <input type="button" value="8" @click="appendValue('8')" />
      <input type="button" value="9" @click="appendValue('9')" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="appendValue('-')"
      />
      <input type="button" class="dot" value="." @click="appendValue('.')" />
      <input type="button" value="0" @click="appendValue('0')" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="calculateResult"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: "",
      operators: ["+", "-", "*", "/"],
      operand1: "",
      operand2: "",
    };
  },
  methods: {
    appendValue(value) {
      this.output += value;
    },
    clearOutput() {
      this.output = "";
      this.operand1 = "";
      this.operand2 = "";
    },
    calculateResult() {
      let operator;
      let operatorIndex;

      for (let i = 0; i < this.output.length; i++) {
        if (this.operators.includes(this.output[i])) {
          operator = this.output[i];
          operatorIndex = i;
          break;
        }
      }

      this.operand1 = parseFloat(this.output.substring(0, operatorIndex));
      this.operand2 = parseFloat(this.output.substring(operatorIndex + 1));

      let result;
      switch (operator) {
        case "+":
          result = this.operand1 + this.operand2;
          break;
        case "-":
          result = this.operand1 - this.operand2;
          break;
        case "*":
          result = this.operand1 * this.operand2;
          break;
        case "/":
          result = this.operand1 / this.operand2;
          break;
        default:
          result = "Error";
      }

      this.output = result;
    },
  },
};
</script>

<style scoped></style>

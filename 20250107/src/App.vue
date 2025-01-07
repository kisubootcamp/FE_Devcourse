<script>
export default {
  data() {
    return {
      output: "0",
      expression: "",
    };
  },

  methods: {
    handleBtnClick(value) {
      if (value === "C") {
        this.clearOutput();
      } else if (value === "=") {
        this.calculateResult();
      } else {
        this.appendExpression(value);
      }
    },
    clearOutput() {
      this.output = "0";
      this.expression = "";
    },
    calculateResult() {
      try {
        const result = eval(this.expression);
        this.output = result.toString();
        this.expression = result.toString();
      } catch (error) {
        this.output = "undefined";
        this.expression = "";
      }
    },
    appendExpression(value) {
      if (["+", "-", "*", "/"].includes(value)) {
        if (
          this.expression === "" ||
          ["+", "-", "*", "/"].includes(this.expression.slice(-1))
        ) {
          return;
        }
        this.expression += value;
        this.output = "";
      } else {
        if (this.output === "0") {
          this.output = value;
        } else {
          this.output += value;
        }
        this.expression += value;
      }
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" readonly :value="output" />
      <input
        type="button"
        class="clear"
        value="C"
        @click="handleBtnClick('C')"
      />
      <input
        type="button"
        class="operator"
        value="/"
        @click="handleBtnClick('/')"
      />
      <input type="button" value="1" @click="handleBtnClick('1')" />
      <input type="button" value="2" @click="handleBtnClick('2')" />
      <input type="button" value="3" @click="handleBtnClick('3')" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="handleBtnClick('*')"
      />
      <input type="button" value="4" @click="handleBtnClick('4')" />
      <input type="button" value="5" @click="handleBtnClick('5')" />
      <input type="button" value="6" @click="handleBtnClick('6')" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="handleBtnClick('+')"
      />
      <input type="button" value="7" @click="handleBtnClick('7')" />
      <input type="button" value="8" @click="handleBtnClick('8')" />
      <input type="button" value="9" @click="handleBtnClick('9')" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="handleBtnClick('-')"
      />
      <input type="button" class="dot" value="." @click="handleBtnClick('.')" />
      <input type="button" value="0" @click="handleBtnClick('0')" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="handleBtnClick('=')"
      />
    </form>
  </div>
</template>
<style></style>

<script>
export default {
  data() {
    return {
      currentValue: "",
      typingValue: "",
      expression: "",
    };
  },
  computed: {
    value() {
      if (this.expression) return this.typingValue;
      else return this.currentValue;
    },
  },
  methods: {
    handleReset() {
      this.currentValue = "";
      this.typingValue = "";
      this.expression = "";
    },
    handleTypingNumber(num) {
      if (this.expression) this.typingValue += num;
      else this.currentValue += num;
    },
    handleTypingExpression(ex) {
      this.expression = ex;
    },
    handleSubmit() {
      if (!this.expression) return;
      if (!this.typingValue) {
        this.expression = "";
        return;
      }
      switch (this.expression) {
        case "/":
          this.currentValue =
            Number(this.currentValue) / Number(this.typingValue);
          break;
        case "*":
          this.currentValue =
            Number(this.currentValue) * Number(this.typingValue);
          break;
        case "-":
          this.currentValue =
            Number(this.currentValue) - Number(this.typingValue);
          break;
        case "+":
          this.currentValue =
            Number(this.currentValue) + Number(this.typingValue);
          break;
        default:
          console.error("Invalid operation:", this.expression);
          break;
      }
      this.typingValue = "";
      this.expression = "";
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" readonly v-model="value" />
      <input type="button" class="clear" value="C" @click="handleReset" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="handleTypingExpression('/')"
      />
      <input type="button" value="1" @click="handleTypingNumber('1')" />
      <input type="button" value="2" @click="handleTypingNumber('2')" />
      <input type="button" value="3" @click="handleTypingNumber('3')" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="handleTypingExpression('*')"
      />
      <input type="button" value="4" @click="handleTypingNumber('4')" />
      <input type="button" value="5" @click="handleTypingNumber('5')" />
      <input type="button" value="6" @click="handleTypingNumber('6')" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="handleTypingExpression('+')"
      />
      <input type="button" value="7" @click="handleTypingNumber('7')" />
      <input type="button" value="8" @click="handleTypingNumber('8')" />
      <input type="button" value="9" @click="handleTypingNumber('9')" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="handleTypingExpression('-')"
      />
      <input
        type="button"
        class="dot"
        value="."
        @click="handleTypingNumber('.')"
      />
      <input type="button" value="0" @click="handleTypingNumber('0')" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="handleSubmit"
      />
    </form>
  </div>
</template>
<style></style>

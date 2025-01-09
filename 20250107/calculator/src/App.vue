<script>
  export default {
    name: 'App',
    data() {
      return {
        hiddenNumber: '',
        displayNumber: '',
        operator: '',
      };
    },
    methods: {
      inputNumber(event) {
        if (this.displayNumber === '' && event.target.value === '0') return;
        this.displayNumber += event.target.value;
      },
      inputDot() {
        if (this.displayNumber.includes('.')) return;

        if (this.displayNumber === '') {
          this.displayNumber = '0.';
          return;
        }

        this.displayNumber += '.';
      },
      inputOperator(event) {
        this.operator = event.target.value;
        this.hiddenNumber = this.displayNumber;
        this.displayNumber = '';
      },
      clear() {
        this.hiddenNumber = '';
        this.displayNumber = '';
        this.operator = '';
        console.log('clear');
      },
      calculate() {
        const displayNumber = parseFloat(this.displayNumber);
        const hiddenNumber = parseFloat(this.hiddenNumber);
        let result = 0;

        switch (this.operator) {
          case '+':
            result = hiddenNumber + displayNumber;
            break;
          case '-':
            result = hiddenNumber - displayNumber;
            break;
          case '*':
            result = hiddenNumber * displayNumber;
            break;
          case '/':
            result = hiddenNumber / displayNumber;
            break;
          default:
            result = displayNumber;
            break;
        }

        return result;
      },
      showResult() {
        this.displayNumber = this.calculate();
        this.hiddenNumber = '';
        this.operator = '';
      },
    },
  };
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input
        v-model="displayNumber"
        type="text"
        name="output"
        readonly />
      <input
        type="button"
        class="clear"
        value="C"
        @click="clear" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="inputOperator" />
      <input
        type="button"
        value="1"
        @click="inputNumber" />
      <input
        type="button"
        value="2"
        @click="inputNumber" />
      <input
        type="button"
        value="3"
        @click="inputNumber" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="inputOperator" />
      <input
        type="button"
        value="4"
        @click="inputNumber" />
      <input
        type="button"
        value="5"
        @click="inputNumber" />
      <input
        type="button"
        value="6"
        @click="inputNumber" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="inputOperator" />
      <input
        type="button"
        value="7"
        @click="inputNumber" />
      <input
        type="button"
        value="8"
        @click="inputNumber" />
      <input
        type="button"
        value="9"
        @click="inputNumber" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="inputOperator" />
      <input
        type="button"
        class="dot"
        value="."
        @click="inputDot" />
      <input
        type="button"
        value="0"
        @click="inputNumber" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="showResult" />
    </form>
  </div>
</template>
<style scoped></style>

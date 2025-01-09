<template>
  <div class="calculator">
    <form @submit.prevent>
      <input type="text" v-model="display" readonly />
      <button type="button" @click="clearDisplay" class="clear">C</button>
      <button type="button" @click="appendOperator('/')" class="operator">
        /
      </button>
      <button type="button" @click="appendNumber(1)">1</button>
      <button type="button" @click="appendNumber(2)">2</button>
      <button type="button" @click="appendNumber(3)">3</button>
      <button type="button" @click="appendOperator('*')" class="operator">
        *
      </button>
      <button type="button" @click="appendNumber(4)">4</button>
      <button type="button" @click="appendNumber(5)">5</button>
      <button type="button" @click="appendNumber(6)">6</button>
      <button type="button" @click="appendOperator('+')" class="operator">
        +
      </button>
      <button type="button" @click="appendNumber(7)">7</button>
      <button type="button" @click="appendNumber(8)">8</button>
      <button type="button" @click="appendNumber(9)">9</button>
      <button type="button" @click="appendOperator('-')" class="operator">
        -
      </button>
      <button type="button" @click="appendDot" class="dot">.</button>
      <button type="button" @click="appendNumber(0)">0</button>
      <button type="button" @click="calculate" class="operator result">
        =
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
    };
  },
  methods: {
    clearDisplay() {
      this.display = "";
    },
    appendNumber(number) {
      this.display += number;
    },
    appendOperator(operator) {
      if (this.display === "" || /[+\-*/]$/.test(this.display)) return;
      this.display += operator;
    },
    appendDot() {
      const lastNumber = this.display.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes(".")) {
        this.display += ".";
      }
    },
    calculate() {
      this.display = String(eval(this.display));
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form input[type="text"] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  background-color: #ed4848;
  grid-column: span 3;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form .result {
  grid-column: span 2;
}
</style>

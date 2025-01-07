<script>
export default {
  data() {
    return {
      display: "",
      firstNum: null,
      operator: null,
      newNumber: true,
    };
  },
  methods: {
    clear() {
      this.display = "";
      this.firstNum = null;
      this.operator = null;
      this.newNumber = true;
    },

    addNumber(num) {
      if (this.newNumber) {
        this.display = num;
        this.newNumber = false;
      } else {
        if (this.display === ".") {
          this.display = "0." + num;
        } else {
          this.display += num;
        }
      }
    },

    addDecimal() {
      if (this.newNumber) {
        this.display = "0.";
        this.newNumber = false;
      } else if (!this.display.includes(".")) {
        this.display += ".";
      }
    },

    setOperator(op) {
      if (this.firstNum === null) {
        this.firstNum = Number(this.display);
      } else if (!this.newNumber) {
        this.calculate();
      }
      this.operator = op;
      this.newNumber = true;
    },

    calculate() {
      if (this.operator === null || this.newNumber) return;

      const secondNum = Number(this.display);
      let result;

      switch (this.operator) {
        case "+":
          result = this.firstNum + secondNum;
          break;
        case "-":
          result = this.firstNum - secondNum;
          break;
        case "*":
          result = this.firstNum * secondNum;
          break;
        case "/":
          if (secondNum === 0) {
            this.clear();
            this.display = "Error";
            return;
          }
          result = this.firstNum / secondNum;
          break;
      }

      this.display = String(result);
      this.firstNum = result;
      this.newNumber = true;
      this.operator = null;
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="p-1 bg-gray-300 border border-gray-700 w-72">
      <form name="forms" class="grid grid-cols-4 gap-1" @submit.prevent>
        <input
          type="text"
          :value="display"
          readonly
          class="h-16 col-span-4 px-2 text-lg text-right border-2 border-gray-700"
        />
        <input
          type="button"
          value="C"
          @click="clear"
          class="h-16 col-span-3 text-lg bg-red-500 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="/"
          @click="setOperator('/')"
          class="h-16 text-lg bg-orange-400 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="1"
          @click="addNumber('1')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="2"
          @click="addNumber('2')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="3"
          @click="addNumber('3')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="*"
          @click="setOperator('*')"
          class="h-16 text-lg bg-orange-400 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="4"
          @click="addNumber('4')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="5"
          @click="addNumber('5')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="6"
          @click="addNumber('6')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="+"
          @click="setOperator('+')"
          class="h-16 text-lg bg-orange-400 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="7"
          @click="addNumber('7')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="8"
          @click="addNumber('8')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="9"
          @click="addNumber('9')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="-"
          @click="setOperator('-')"
          class="h-16 text-lg bg-orange-400 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="."
          @click="addDecimal"
          class="h-16 text-lg bg-green-500 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="0"
          @click="addNumber('0')"
          class="h-16 text-lg border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
        <input
          type="button"
          value="="
          @click="calculate"
          class="h-16 col-span-2 text-lg bg-orange-400 border-2 border-gray-700 cursor-pointer hover:shadow-md"
        />
      </form>
    </div>
  </div>
</template>

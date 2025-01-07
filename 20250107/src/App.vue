<script>
export default {
  data() {
    return {
      valueA: "",
      valueB: "",
      operator: null,
    };
  },
  methods: {
    handleClick(event) {
      if (
        (event.target.value >= 0 && event.target.value < 10) ||
        event.target.value === "."
      ) {
        this.valueB += event.target.value;
        console.log(this.valueB);
      } else if (
        event.target.value === "*" ||
        event.target.value === "/" ||
        event.target.value === "+" ||
        event.target.value === "-"
      ) {
        if (this.valueA !== "") {
          if (this.operator === "*") {
            this.valueA = Number(this.valueA) * Number(this.valueB);
          } else if (this.operator === "/") {
            this.valueA = Number(this.valueA) / Number(this.valueB);
          } else if (this.operator === "+") {
            this.valueA = Number(this.valueA) + Number(this.valueB);
          } else if (this.operator === "-") {
            this.valueA = Number(this.valueA) - Number(this.valueB);
          }
          this.valueB = "";
          this.operator = event.target.value;
        } else {
          this.valueA = this.valueB;
          this.valueB = "";
          this.operator = event.target.value;
        }
      } else if (event.target.value === "=") {
        if (this.operator === "*")
          this.valueB = Number(this.valueA) * Number(this.valueB);
        else if (this.operator === "/")
          this.valueB = Number(this.valueA) / Number(this.valueB);
        else if (this.operator === "+")
          this.valueB = Number(this.valueA) + Number(this.valueB);
        else if (this.operator === "-")
          this.valueB = Number(this.valueA) - Number(this.valueB);
      } else {
        this.valueA = "";
        this.valueB = "";
        this.operator = null;
      }
      console.log(this.valueA, this.valueB, this.operator);
    },
  },
};
</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <div class="calculator">
      <form name="forms">
        <input type="text" name="output" readonly :value="valueB" />
        <input
          type="button"
          class="clear"
          value="C"
          @click="handleClick($event)"
        />
        <input
          type="button"
          class="operator"
          value="/"
          @click="handleClick($event)"
        />
        <input type="button" value="1" @click="handleClick($event)" />
        <input type="button" value="2" @click="handleClick($event)" />
        <input type="button" value="3" @click="handleClick($event)" />
        <input
          type="button"
          class="operator"
          value="*"
          @click="handleClick($event)"
        />
        <input type="button" value="4" @click="handleClick($event)" />
        <input type="button" value="5" @click="handleClick($event)" />
        <input type="button" value="6" @click="handleClick($event)" />
        <input
          type="button"
          class="operator"
          value="+"
          @click="handleClick($event)"
        />
        <input type="button" value="7" @click="handleClick($event)" />
        <input type="button" value="8" @click="handleClick($event)" />
        <input type="button" value="9" @click="handleClick($event)" />
        <input
          type="button"
          class="operator"
          value="-"
          @click="handleClick($event)"
        />
        <input
          type="button"
          class="dot"
          value="."
          @click="handleClick($event)"
        />
        <input type="button" value="0" @click="handleClick($event)" />
        <input
          type="button"
          class="operator result"
          value="="
          @click="handleClick($event)"
        />
      </form>
    </div>
  </div>
</template>
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

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type="text"] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>

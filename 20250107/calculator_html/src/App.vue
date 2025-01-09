<script>
export default {
  data() {
    return {
      output: "0",
      calc: [],
      calculated: false,
    };
  },
  methods: {
    command(event) {
      if (Number(event.target.value) >= 0) {
        if (event.target.name === "output") return;

        const num = event.target.value;
        if (this.output === "0" || this.calculated === true) {
          this.output = num;
          this.calculated = false;
        } else {
          this.output = this.output + num;
        }
      } else if (typeof event.target.value === "string") {
        if (
          event.target.value === "C" ||
          event.target.value === "." ||
          event.target.value === "="
        )
          return;
        if (this.output === "") {
          this.calc[this.calc.length - 1] = event.target.value;
          console.log(this.calc);
          return;
        }
        this.calc.push(Number(this.output));
        this.calc.push(event.target.value);

        console.log(this.calc);
        this.output = "";
      }
    },
    calculate() {
      if (this.output === "" || this.output === ".") return;
      this.calc.push(Number(this.output));
      console.log(this.calc);
      let is = "";
      const result = this.calc.reduce((acc, cur) => {
        if (typeof cur === "number") {
          switch (is) {
            case "/":
              return acc / cur;
            case "*":
              return acc * cur;
            case "+":
              return acc + cur;
            case "-":
              return acc - cur;
            default:
              return acc;
          }
        }
        if (typeof cur === "string") is = cur;
        return acc;
      }, this.calc[0]);
      this.output = result;
      this.calc = [];
      this.calculated = true;
    },
    addPoint() {
      if (this.output.includes(".")) return;
      this.output = this.output + ".";
    },
    reset() {
      this.output = "0";
      this.calc = [];
    },
  },
  computed: {},
};
</script>

<template>
  {{ calc }}
  <div class="calculator">
    <form name="forms" @click="command($event)">
      <input type="text" name="output" :value="output" readonly />
      <input type="button" class="clear" value="C" @click="reset" />
      <input type="button" class="operator" value="/" />
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input type="button" class="operator" value="*" />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input type="button" class="operator" value="+" />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input type="button" class="operator" value="-" />
      <input type="button" class="dot" value="." @click="addPoint" />
      <input type="button" value="0" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="calculate"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
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

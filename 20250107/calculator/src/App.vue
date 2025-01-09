<script>
export default {
  name: "App",
  data() {
    return {
      input: "",
      value: 0,
      operator: "",
    };
  },
  methods: {
    handleChange(event) {
      this.input += event.target.value;
    },
    handleInit() {
      this.input = "";
      this.value = "";
    },
    //  120 + 3 - 10 =
    handleClickOperator(event) {
      switch (this.operator) {
        case "+":
          this.value += Number(this.input);
          this.input = "";
          break;
        case "-":
          this.value -= Number(this.input);
          this.input = "";
          break;
        case "*":
          this.value *= Number(this.input);
          this.input = "";
          break;
        case "/":
          this.value /= Number(this.input);
          this.input = "";
          break;
        default:
          this.value = Number(this.input);
          this.input = "";
          break;
      }

      this.operator = event.target.value;
      if (this.operator === "=") {
        this.input = this.value;
      }
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms" @click="handleChange">
      <input type="text" name="output" readonly :value="input" />
      <input type="button" class="clear" value="C" @click.stop="handleInit" />
      <input
        type="button"
        class="operator"
        value="/"
        @click.stop="handleClickOperator"
      />
      <input type="button" value="1" />
      <input type="button" value="2" />
      <input type="button" value="3" />
      <input
        type="button"
        class="operator"
        value="*"
        @click.stop="handleClickOperator"
      />
      <input type="button" value="4" />
      <input type="button" value="5" />
      <input type="button" value="6" />
      <input
        type="button"
        class="operator"
        value="+"
        @click.stop="handleClickOperator"
      />
      <input type="button" value="7" />
      <input type="button" value="8" />
      <input type="button" value="9" />
      <input
        type="button"
        class="operator"
        value="-"
        @click.stop="handleClickOperator"
      />
      <input
        type="button"
        class="dot"
        value="."
        @click.stop="handleClickOperator"
      />
      <input type="button" value="0" />
      <input
        type="button"
        class="operator result"
        value="="
        @click.stop="handleClickOperator"
      />
    </form>
  </div>
</template>
<style scoped></style>

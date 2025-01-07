<script>
export default {
  data() {
    return {
      display: "",
      total: "",
    };
  },
  methods: {
    calculate(value) {
      if (value === "+" || value === "/" || value === "*" || value === "-") {
        this.clearDisplay();
        this.total += value;
      } else {
        this.display += value;
        this.total += value;
      }
    },
    clearDisplay() {
      this.display = "";
    },
    result() {
      this.display = eval(this.total);
    },
    reset() {
      this.clearDisplay();
      this.total = "";
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" readonly :value="display" />
      <input type="button" class="clear" value="C" @click="reset" />
      <input type="button" class="operator" value="/" @click="calculate('/')" />
      <input type="button" value="1" @click="calculate(1)" />
      <input type="button" value="2" @click="calculate(2)" />
      <input type="button" value="3" @click="calculate(3)" />
      <input type="button" class="operator" value="*" @click="calculate('*')" />
      <input type="button" value="4" @click="calculate(4)" />
      <input type="button" value="5" @click="calculate(5)" />
      <input type="button" value="6" @click="calculate(6)" />
      <input type="button" class="operator" value="+" @click="calculate('+')" />
      <input type="button" value="7" @click="calculate(7)" />
      <input type="button" value="8" @click="calculate(8)" />
      <input type="button" value="9" @click="calculate(9)" />
      <input type="button" class="operator" value="-" @click="calculate('-')" />
      <input type="button" class="dot" value="." @click="calculate('.')" />
      <input type="button" value="0" @click="calculate(0)" />
      <input type="button" class="operator result" value="=" @click="result" />
    </form>
  </div>
</template>
<style></style>

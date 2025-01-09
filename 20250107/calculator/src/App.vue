<script>
export default {
  data() {
    return {
      output: "",
      result: 0,
      operator: "",
    };
  },
  methods: {
    handleNumClick(event) {
      this.output += event.target.value;
    },
    handleResetClick() {
      this.output = "";
    },
    handleOperatorClick(e) {
      this.result = Number(this.output);
      this.output = "";
      if (e.target.value === "+") this.operator = "plus";
      else if (e.target.value === "-") this.operator = "minus";
      else if (e.target.value === "*") this.operator = "mul";
      else if (e.target.value === "/") this.operator = "div";
    },
    handleResultClick() {
      if (this.operator === "plus") this.result += Number(this.output);
      else if (this.operator === "minus") this.result -= Number(this.output);
      else if (this.operator === "mul") this.result *= Number(this.output);
      else if (this.operator === "div") this.result /= Number(this.output);

      if (isNaN(this.result)) this.output = "Error";
      else this.output = this.result;
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" readonly v-model="output" />
      <input type="button" class="clear" value="C" @click="handleResetClick" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="handleOperatorClick($event)"
      />
      <input type="button" value="1" @click="handleNumClick($event)" />
      <input type="button" value="2" @click="handleNumClick($event)" />
      <input type="button" value="3" @click="handleNumClick($event)" />
      <input
        type="button"
        class="operator"
        value="*"
        @click="handleOperatorClick($event)"
      />
      <input type="button" value="4" @click="handleNumClick($event)" />
      <input type="button" value="5" @click="handleNumClick($event)" />
      <input type="button" value="6" @click="handleNumClick($event)" />
      <input
        type="button"
        class="operator"
        value="+"
        @click="handleOperatorClick($event)"
      />
      <input type="button" value="7" @click="handleNumClick($event)" />
      <input type="button" value="8" @click="handleNumClick($event)" />
      <input type="button" value="9" @click="handleNumClick($event)" />
      <input
        type="button"
        class="operator"
        value="-"
        @click="handleOperatorClick($event)"
      />
      <input
        type="button"
        class="dot"
        value="."
        @click="handleNumClick($event)"
      />
      <input type="button" value="0" @click="handleNumClick($event)" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="handleResultClick"
      />
    </form>
  </div>
</template>
<style></style>

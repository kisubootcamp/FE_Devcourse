<script>
export default {
  data() {
    return {
      currentNum: "",
      leftNum: null,
      operator: null,
    };
  },
  methods: {
    clickNumberBtn(event) {
      this.currentNum += event.target.value;
    },
    clickOperatorBtn(event) {
      if (this.currentNum) {
        this.leftNum = Number(this.currentNum);
        this.operator = event.target.value;
        this.currentNum = "";
      }
    },
    clickClearBtn() {
      this.currentNum = "";
    },
    clickResultBtn(event) {
      switch (this.operator) {
        case "+":
          this.currentNum = this.leftNum + Number(this.currentNum);
          break;
        case "-":
          this.currentNum = this.leftNum - Number(this.currentNum);
          break;
        case "*":
          this.currentNum = this.leftNum * Number(this.currentNum);
          break;
        case "/":
          this.currentNum = this.leftNum / Number(this.currentNum);
          break;
      }
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" :value="currentNum" readonly />
      <input @click="clickClearBtn" type="button" class="clear" value="C" />
      <input @click="clickOperatorBtn" type="button" class="operator" value="/" />
      <input @click="clickNumberBtn" type="button" value="1" />
      <input @click="clickNumberBtn" type="button" value="2" />
      <input @click="clickNumberBtn" type="button" value="3" />
      <input @click="clickOperatorBtn" type="button" class="operator" value="*" />
      <input @click="clickNumberBtn" type="button" value="4" />
      <input @click="clickNumberBtn" type="button" value="5" />
      <input @click="clickNumberBtn" type="button" value="6" />
      <input @click="clickOperatorBtn" type="button" class="operator" value="+" />
      <input @click="clickNumberBtn" type="button" value="7" />
      <input @click="clickNumberBtn" type="button" value="8" />
      <input @click="clickNumberBtn" type="button" value="9" />
      <input @click="clickOperatorBtn" type="button" class="operator" value="-" />
      <input @click="clickNumberBtn" type="button" class="dot" value="." />
      <input @click="clickNumberBtn" type="button" value="0" />
      <input @click="clickResultBtn" type="button" class="operator result" value="=" />
    </form>
  </div>
</template>

<style lang="scss" scoped></style>

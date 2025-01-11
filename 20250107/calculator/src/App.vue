<script>
export default {
  name: "App",
  data() {
    return {
      output: null,
      prev: null,
      cur: null,
      operator: null,
    };
  },
  methods: {
    operation(e) {
      const now = e.currentTarget.value;
      if (["+", "-", "*", "/", "="].includes(now)) {
        if (this.operator !== null) {
          switch (this.operator) {
            case "+":
              this.prev = this.prev + Number(this.cur);
              break;
            case "-":
              this.prev = this.prev - Number(this.cur);
              break;
            case "/":
              this.prev = this.prev / Number(this.cur);
              break;
            case "*":
              this.prev = this.prev * Number(this.cur);
              break;
          }
          if (now === "=") {
            this.output = this.prev;
            this.operator = null;
            this.cur = this.prev;
          } else {
            this.operator = now;
            this.output = null;
            this.cur = null;
          }
        } else {
          this.output = null;
          this.operator = now;
          this.prev = Number(this.cur);
          this.cur = null;
        }
        return;
      }
      if (now === ".") {
        if (this.cur === null) {
          this.cur = "0.";
        } else if (!this.cur.includes(".")) {
          this.cur += ".";
        }
        this.output = this.cur;
        return;
      }
      this.cur = this.cur === null ? now : this.cur + now;
      this.output = this.cur;
      if (now === "C") {
        this.cur = null;
        this.prev = null;
        this.output = null;
        this.operator = null;
      }
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation"
      />
    </form>
  </div>
</template>
<style scoped></style>

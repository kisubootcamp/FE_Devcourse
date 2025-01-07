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
    operation(event) {
      const n = event.target.value;

      if (["+", "-", "*", "/", "="].includes(n)) {
        this.cur = Number(this.cur);
        if (this.operator !== null) {
          switch (this.operatior) {
            case "+":
              this.prev = this.prev + this.cur;
              break;
            case "-":
              this.prev = this.prev - this.cur;
              break;
            case "*":
              this.prev = this.prev * this.cur;
              break;
            case "/":
              this.prev = this.prev / this.cur;
              break;
          }

          if (n === "=") {
            this.output = this.prev;
            this.operator = null;
            this.cur = this.prev;
          }

          return;
        }

        this.output = null;
        this.operator = n;
        this.prev = this.cur;
      }
      this.cur = this.cur === null ? n : (this.cur += n);
      this.output = this.cur;
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input
        v-model="output"
        type="text"
        name="output"
        readonly
        @click="operation"
      />
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
<style></style>

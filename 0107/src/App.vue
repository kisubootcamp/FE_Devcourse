<script>
export default {
  data() {
    return {
      val: "",
      result: "",
      view: "",
    };
  },
  methods: {
    handleClick(event) {
      this.val = event.target.value;
      this.view += this.val;
      this.result += this.val;
    },
    initClick() {
      this.view = "";
      this.result = "";
    },
    resuiltClick() {
      this.view = eval(this.result);
    },
    clearClick() {
      this.view = "";
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input type="text" name="output" readonly v-model="view" />
      <input type="button" class="clear" value="C" @click="initClick" />
      <input
        type="button"
        class="operator"
        value="/"
        @click="handleClick($event), clearClick()"
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
      <input type="button" class="dot" value="." @click="handleClick($event)" />
      <input type="button" value="0" @click="handleClick($event)" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="resuiltClick()"
      />
    </form>
  </div>
</template>
<style></style>

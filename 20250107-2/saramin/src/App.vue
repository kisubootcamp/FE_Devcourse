<script>
export default {
  name: "App",
  data() {
    return {
      inputValue: "",
      withoutSpace: "",
      inputValueByte: 0,
      inputValueByteWithoutSpace: 0,
    };
  },
  computed: {
    inputLength() {
      return this.inputValue.length;
    },
    inputLengthWithoutSpace() {
      return this.withoutSpace.length;
    },
    inputByte() {
      this.inputValueByte = 0;
      const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      for (let i = 0; i < this.inputValue.length; i++) {
        if (regx.test(this.inputValue[i])) this.inputValueByte += 2;
        else this.inputValueByte++;
      }
      return this.inputValueByte;
    },
    inputByteWithoutSpace() {
      this.inputValueByteWithoutSpace = 0;
      const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      for (let i = 0; i < this.withoutSpace.length; i++) {
        if (regx.test(this.withoutSpace[i]))
          this.inputValueByteWithoutSpace += 2;
        else this.inputValueByteWithoutSpace++;
      }
      return this.inputValueByteWithoutSpace;
    },
  },
  watch: {
    inputValue(cur) {
      this.withoutSpace = "";
      for (let i = 0; i < cur.trim().length; i++) {
        if (cur.trim()[i] !== " ") this.withoutSpace += cur.trim()[i];
      }
    },
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value;
    },

    reset() {
      this.inputValue = "";
    },
  },
};
</script>
<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-[564px] border bg-[#FCFCFC]">
      <div class="p-[30px] border-b">
        <textarea
          :value="inputValue"
          name="textarea"
          id="textarea"
          class="border w-full h-[400px] resize-none overflow-y-scroll p-[2px]"
          placeholder="내용을 입력해주세요."
          @input="handleInput($event)"
        ></textarea>
      </div>
      <div class="px-[30px] py-[10px]">
        <div class="flex">
          <p>공백 포함</p>
          <p class="px-[15px]">{{ inputLength }} 자</p>
          <p>{{ inputByte }} byte</p>
        </div>
        <div class="flex">
          <p>공백 제외</p>
          <p class="px-[15px]">{{ inputLengthWithoutSpace }} 자</p>
          <p>{{ inputByteWithoutSpace }} byte</p>
        </div>
      </div>
      <div class="h-auto flex justify-center items-center p-[50px] border-t">
        <button type="button" class="border px-10 py-2" @click="reset">
          초기화
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

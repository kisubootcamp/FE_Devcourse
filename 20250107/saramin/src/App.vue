<script>
export default {
  data() {
    return {
      text: "",
      textLength: 0,
      textByte: 0,
    };
  },
  methods: {
    calculateLength() {
      this.textLength = this.text.length;
      this.calculateUTF16Byte();
    },
    calculateUTF16Byte() {
      this.textByte = [...this.text].reduce((acc, char) => {
        return acc + (char.codePointAt(0) > 0xffff ? 4 : 2);
      }, 0);
    },
    copyText() {
      navigator.clipboard.writeText(this.text).then(() => {
        alert("전체 복사되었습니다.");
      });
    },
    resetText() {
      this.text = "";
      this.textLength = 0;
      this.textByte = 0;
    },
  },
};
</script>

<template>
  <div class="w-[650px] mx-auto mt-10 text-center">
    <h1 class="text-3xl mb-10 text-left">글자수 세기</h1>
    <div class="p-5 border border-gray-300">
      <textarea
        v-model="text"
        @input="calculateLength"
        class="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows="20"
        placeholder="내용을 입력해주세요."
      ></textarea>
      <hr class="my-4" />
      <p class="text-m text-gray-600 text-left">
        공백 포함 <strong>{{ textLength }}</strong
        >자 | <strong>{{ textByte }}</strong> byte
      </p>
      <p class="text-m text-gray-600 text-left">
        공백 제외 <strong>{{ text.replace(/\s+/g, "").length }}</strong
        >자 |
        <strong>{{
          [...text.replace(/\s+/g, "")].reduce((acc, char) => {
            return acc + (char.codePointAt(0) > 0xffff ? 4 : 2);
          }, 0)
        }}</strong>
        byte
      </p>
      <hr class="my-4" />
      <div class="mt-4 space-x-4">
        <button @click="copyText" class="px-4 py-2 bg-gray-500 text-white">
          전체복사
        </button>
        <button
          @click="resetText"
          class="px-4 py-2 border-#666666 border text-[#666666]"
        >
          초기화
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "App",
  data() {
    return {
      spaceLetter: 0,
      spaceByte: 0,
      noSpaceLetter: 0,
      noSpaceByte: 0,

      text: "",
    };
  },
  methods: {
    handleChange(e) {
      this.text = e.target.value;
    },
    handleCopy() {
      navigator.clipboard.writeText(this.text);
      alert("copy text");
    },
    handleReset() {
      this.text = "";
    },
    calByte(str) {
      const kChars = str.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) || [];
      const chars = str.length - kChars.length;
      return kChars.length * 2 + chars * 1;
    },
  },
  watch: {
    text(cur, prev) {
      this.spaceLetter = cur.length;
      this.spaceByte = this.calByte(cur);

      this.noSpaceLetter = cur.trim().split(" ").join("").length;
      this.noSpaceByte = this.calByte(cur.trim().split(" ").join(""));
    },
  },
};
</script>
<template>
  <h1 class="text-3xl text-center">글자수세기</h1>
  <div class="bg-[#FBFBFB] w-[570px] m-auto border">
    <div class="flex items-center justify-center p-4">
      <textarea
        :value="text"
        @input="handleChange($event)"
        name=""
        id=""
        class="w-[490px] h-[400px]"
        placeholder="내용을 입력해주세요."
      ></textarea>
    </div>
    <div class="border-t w-[550px] m-auto pl-[30px] py-[15px]">
      <p>
        공백 포함 <span class="text-orange-500">{{ spaceLetter }}</span> 자 |
        <span class="font-bold">{{ spaceByte }}</span> byte
      </p>
      <p>
        공백 제외 <span class="text-orange-500">{{ noSpaceLetter }}</span> 자 |
        <span class="font-bold">{{ noSpaceByte }}</span> byte
      </p>
    </div>
    <div class="h-[110px] border-t flex items-center justify-center gap-2">
      <button
        type="button"
        class="w-[160px] h-[40px] bg-[#9c9c9c] text-white"
        @click="handleCopy($event)"
      >
        전체 복사
      </button>
      <button
        type="button"
        class="w-[160px] h-[40px] border"
        @click="handleReset"
      >
        초기화
      </button>
    </div>
  </div>
</template>
<style scoped></style>

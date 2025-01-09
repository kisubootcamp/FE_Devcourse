<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    textLengthWithSpaces() {
      return this.inputText.length;
    },
    textLengthWithoutSpaces() {
      return this.inputText.replace(/\s/g, "").length;
    },
    textBytes() {
      return new Blob([this.inputText]).size;
    },
  },
  methods: {
    resetText() {
      this.inputText = "";
    },

    copyToClipboard() {
      navigator.clipboard
        .writeText(this.inputText)
        .then(() => alert("텍스트가 복사되었습니다!"))
        .catch(() => alert("복사 실패!"));
    },
  },
};
</script>

<template>
  <div class="h-screen mx-auto max-w-[600px] flex items-center text-black">
    <div class="w-full h-[645px] flex">
      <div
        class="flex flex-col w-full h-full bg-[#FCFCFC] border border-[#9C9C9C]"
      >
        <div class="flex items-center justify-center p-[30px] h-[510px]">
          <textarea
            v-model="inputText"
            class="w-full h-full text-black"
            placeholder="내용을 입력해주세요."
          ></textarea>
        </div>

        <hr />

        <div class="px-[30px] pt-[13px] pb-[16px] gap-2">
          <span class="flex gap-1 text-sm">
            <p>공백 포함</p>
            <p class="text-[#ff662f]">{{ textLengthWithSpaces }}</p>
            <p>자 |</p>
            <p>{{ textBytes }}</p>
            <p>byte</p>
          </span>
          <span class="flex gap-1 text-sm">
            <p>공백 제외</p>
            <p class="text-[#ff662f]">{{ textLengthWithoutSpaces }}</p>
            <p>자 |</p>
            <p>{{ textBytes }}</p>
            <p>byte</p>
          </span>
        </div>

        <hr />

        <div class="flex items-start justify-center py-[35px] gap-[5px]">
          <button
            @click="copyToClipboard"
            class="pt-[6px] px-[14px] pb-2 bg-[#9c9c9c] border border-[#8f8f8f] text-[#ffffff] w-[158px]"
          >
            전체 복사
          </button>
          <button
            @click="resetText"
            class="pt-[6px] px-[14px] pb-2 bg-[#fff] border border-[#dbdbdb] text-[#666666] w-[158px]"
          >
            초기화
          </button>
        </div>
      </div>

      <!-- <div
        class="flex h-full border border-black w-[620px] flex-col text-base font-bold"
      >
        <div class="bg-[#5d6283] px-10 pt-[13px] pb-[15px] text-[whitesmoke]">
          맞춤법 검사
        </div>
        <div
          class="bg-[#F7F9FF] flex pl-6 justify-between pr-[12px] h-[50px] items-center text-[#444444]"
        >
          <div class="flex gap-5">
            <p>맞춤법 오류</p>
            <p>0개</p>
          </div>
          <button
            class="pt-[5px] px-[13px] pb-[6px] border border-[#dbdbdb] text-[#444] text-[13px] bg-[#fff] font-normal"
          >
            일괄 수정
          </button>
        </div>
        <div
          class="bg-[#FFFFFF] flex flex-col justify-center items-center px-[34px] h-full"
        >
          <p class="h-full pt-5 font-medium text-[15px] text-[#444444]">
            검사 결과 맞춤법 오류가 없습니다.
          </p>
          <div class="py-[34px] px-[105px]">
            <button
              class="pt-[5px] px-[13px] pb-[6px] border border-[#5f75eb] text-[#fff] text-[14px] bg-[#7185e8] font-normal w-[159px]"
            >
              검사 완료
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 16px;
}

button {
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  opacity: 0.9;
}
</style>

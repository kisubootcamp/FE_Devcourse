<script>
export default {
  data() {
    return {
      contents: "",
      totalContentsByte: 0,
      totalContentsByteWithoutSpace: 0,
    };
  },
  methods: {
    handleInput(event) {
      const contents = event.target.value;
      this.contents = contents;
      this.calculateContentByte(contents);
    },
    calculateContentByte(contents) {
      let total = 0;
      let totalWithoutSpace = 0;

      const codes = contents.split("").map((_, idx) => contents.charCodeAt(idx));
      for (let code of codes) {
        // 한글일 때
        if ((code >= 0xac00 && code <= 0xd7a3) || (code >= 0x3131 && code <= 0x318e)) {
          total += 2;
          totalWithoutSpace += 2;
        }
        // 공백 또는 줄 바꿈일 때
        else if (code === 0x0020 || code === 0x000a) {
          total += 1;
        } else {
          total += 1;
          totalWithoutSpace += 1;
        }
      }
      this.totalContentsByte = total;
      this.totalContentsByteWithoutSpace = totalWithoutSpace;
    },
    copyContents() {
      navigator.clipboard.writeText(this.contents);
    },
    clearContents() {
      this.contents = "";
      this.totalContentsByte = 0;
      this.totalContentsByteWithoutSpace = 0;
    },
  },
  computed: {
    contentsLength() {
      return this.contents.length;
    },
    contentsLengthWithoutSpace() {
      return this.contents.replace(/[\s+\n+]/g, "").length;
    },
  },
};
</script>
<template>
  <div class="flex w-full h-screen justify-center items-center">
    <article class="flex flex-col w-[565px] h-[651px] bg-[#fcfcfc]">
      <div class="w-[564px] h-[461px] p-[30px]">
        <textarea
          v-model="contents"
          @input="handleInput"
          class="w-full h-[401px] text-[#444] focus:outline-[#003fe5] rounded-lg leading-[22px] break-all resize-none overflow-y-scroll"
        />
      </div>
      <div class="mx-2 pt-[13px] pb-4 border-t border-[#ebebeb]">
        <p class="mb-2 px-[22px]">
          <span>공백 포함</span>
          <strong class="ml-4 text-[#ff662f]">{{ contentsLength }}</strong>
          <span>자</span>
          <strong
            class="mr-[6px] before:content-['|'] before:text-[#ebebeb] before:mx-[10px]"
            >{{ totalContentsByte }}</strong
          >
          <span>byte</span>
        </p>
        <p class="mb-2 px-[22px]">
          <span>공백 제외</span>
          <strong class="ml-4 text-[#ff662f]">{{ contentsLengthWithoutSpace }}</strong>
          <span>자</span>
          <strong
            class="mr-[6px] before:content-['|'] before:text-[#ebebeb] before:mx-[10px]"
            >{{ totalContentsByteWithoutSpace }}</strong
          >
          <span>byte</span>
        </p>
        <p class="px-[22px]"></p>
      </div>
      <div class="flex h-full justify-center items-center border-t border-[#ebebeb] gap-[5px]">
        <button
          @click="copyContents"
          type="button"
          class="w-[159px] h-10 text-[15px] border border-[#8f8f8f] text-white bg-[#9c9c9c] relative before:content-[''] before:inline-block before:mr-2 before:w-[15px] before:h-[14px] before:align-middle before:bg-[url('//www.saraminimage.co.kr/sri/common/ico/ico_sri_input2.png')] before:bg-[0_-150px] before:bg-no-repeat"
        >
          전체 복사
        </button>
        <button
          @click="clearContents"
          type="button"
          class="w-[159px] h-10 bg-white text-[15px] border border-[#dbdbdb] text-[#666] relative before:content-[''] before:inline-block before:mr-2 before:w-[15px] before:h-[14px] before:align-middle before:bg-[url('//www.saraminimage.co.kr/sri/common/ico/ico_sri_input2.png')] before:bg-[0_-200px] before:bg-no-repeat"
        >
          초기화
        </button>
      </div>
    </article>
  </div>
</template>
<style></style>

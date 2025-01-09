<script>
export default {
  name: "App",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleInput($event) {
      this.query = $event.target.value;
    },
    getByteSize(str) {
      let byteSize = 0;
      for (const char of str) {
        const code = char.charCodeAt(0);
        if (code <= 0x7f) {
          byteSize += 1; // ASCII (0~127): 1바이트
        } else if (code <= 0x7ff) {
          byteSize += 2; // 128~2047: 2바이트
        } else if (code <= 0xffff) {
          byteSize += 3; // 2048~65535: 3바이트
        } else {
          byteSize += 4; // UTF-16 Surrogate Pair: 4바이트
        }
      }
      return byteSize;
    },
  },
  computed: {
    queryLength() {
      return this.query.length;
    },
    queryLengthWithoutSpaces() {
      return this.query.replace(/\s/g, "").length;
    },
    queryBytes() {
      return this.getByteSize(this.query);
    },
    queryBytesWithoutSpaces() {
      return this.getByteSize(this.query.replace(/\s/g, ""));
    },
  },
};
</script>
<template>
  <div class="flex flex-col items-center w-full h-screen">
    <h1 class="text-[30px] my-8">글자수 세기</h1>
    <div class="border border-[#ddd] w-[565px] h-[651px] bg-[#fcfcfc]">
      <div class="p-[30px] h-[461px]">
        <textarea
          placeholder="내용을 입력해주세요."
          cols="70"
          rows="22"
          class="w-full h-full text-sm leading-[22px] break-all resize-none overflow-y-scroll focus:outline-[#003fe5]"
          :value="query"
          @input="handleInput"
        ></textarea>
      </div>

      <div class="mx-2 h-[78px] pt-[13px] pb-[16px] border-y border-[#ebebeb]">
        <p class="px-[22px]">
          <span>공백 포함</span
          ><strong class="ml-4 mr-[6px] text-[#ff662f]">{{
            queryLength
          }}</strong
          ><span>자</span
          ><strong
            class="before:content-['|'] before:mx-[10px] before:mt-[4px] before:text-[#dbdbdb] mr-[6px]"
            >{{ queryBytes }}</strong
          ><span>byte</span>
        </p>
        <p class="px-[22px]">
          <span>공백 제외</span
          ><strong class="ml-4 mr-[6px] text-[#ff662f]">{{
            queryLengthWithoutSpaces
          }}</strong
          ><span>자</span
          ><strong
            class="before:content-['|'] before:mx-[10px] before:mt-[4px] before:text-[#dbdbdb] mr-[6px]"
            >{{ queryBytesWithoutSpaces }}</strong
          ><span>byte</span>
        </p>
      </div>
      <div class="h-[111px] flex justify-center items-center">
        <div class="text-[15px] flex gap-2">
          <button
            class="bg-[#9c9c9c] border border-[#8f8f8f] pt-1.5 pb-2 pl-[14px] pr-[14px] w-[159px] h-[40px] text-white"
          >
            전체 복사
          </button>
          <button
            class="pt-1.5 pb-2 pl-[14px] pr-[14px] w-[159px] h-[40px] border border-[#dbdbdb] text-[#666]"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

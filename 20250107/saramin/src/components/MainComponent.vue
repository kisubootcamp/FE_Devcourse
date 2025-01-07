<script>
export default {
  name: "MainComponent",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleInput(e) {
      this.text = e.target.value;
    },
    calculateBytes(text) {
      let byteCount = 0;
      for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (charCode <= 0x7f) {
          byteCount += 1; // 1바이트 문자
        } else if (charCode <= 0x7ff) {
          byteCount += 2; // 2바이트 문자
        } else {
          byteCount += 3; // 3바이트 문자
        }
      }
      return byteCount;
    },
    // 텍스트 복사
    copyText() {
      if (!this.text) {
        alert("내용을 입력해 주세요.");
        return;
      }

      navigator.clipboard
        .writeText(this.text)
        .then(() => {
          alert(
            "입력하신 내용이 복사되었습니다.\n\nCtrl+V 키를 사용하여, 붙여 넣기를 사용하실 수 있습니다."
          );
        })
        .catch((err) => {
          console.error("복사 실패", err);
          alert("복사에 실패했습니다.");
        });
    },

    // 텍스트 초기화
    clearText() {
      this.text = "";
    },
  },
  computed: {
    charCount() {
      return {
        withSpace: this.text.length,
        withoutSpace: this.text.replace(/\s/g, "").length,
        withSpaceBytes: this.calculateBytes(this.text),
        withoutSpaceBytes: this.calculateBytes(this.text.replace(/\s/g, "")),
      };
    },
  },
};
</script>
<template>
  <section
    class="flex flex-col items-center m-auto bg-[#fbfbfb] text-[#444444] border border-[#ddd]"
  >
    <div class="w-full px-2">
      <!--InputField -->
      <form class="w-full h-[401px] p-[30px] text-[14px] leading-[22px]">
        <textarea
          :value="text"
          class="w-full h-full resize-none"
          placeholder="내용을 입력해주세요."
          @input="handleInput"
        ></textarea>
      </form>
      <!-- CharCount -->
      <div
        class="flex flex-col gap-2 w-full text-[14px] pt-[13px] pb-4 px-[26px] border-t border-[#ebebeb]"
      >
        <div class="flex text-[15px] gap-4">
          <span>공백 포함</span>
          <div>
            <span
              ><span class="font-bold text-[#ff662f]">{{
                charCount.withSpace
              }}</span>
              자</span
            >
            <span
              class="before:content-['|'] before:mx-[10px] before:text-[#dbdbdb]"
              ><span class="font-bold">{{ charCount.withSpaceBytes }}</span>
              byte</span
            >
          </div>
        </div>
        <div class="flex text-[15px] gap-4">
          <span>공백 제외</span>
          <div>
            <span
              ><span class="font-bold text-[#ff662f]">{{
                charCount.withoutSpace
              }}</span>
              자</span
            >
            <span
              class="before:content-['|'] before:mx-[10px] before:text-[#dbdbdb]"
              ><span class="font-bold">{{ charCount.withoutSpaceBytes }}</span>
              byte</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Button -->
    <div
      class="flex items-center justify-center w-[564px] gap-[5px] font-[15px] py-[35px] border-t border-[#ebebeb]"
    >
      <button
        class="flex items-center justify-center h-10 w-[159px] border border-[#8f8f8f] bg-[#9c9c9c] text-white"
        @click="copyText"
      >
        <span
          class="inline-block mr-2 w-4 h-4 align-middle bg-[url('//www.saraminimage.co.kr/sri/common/ico/ico_sri_input2.png')] bg-no-repeat bg-[0_-148px]"
        ></span>
        전체복사
      </button>
      <button
        class="flex items-center justify-center h-10 w-[159px] border border-[#dbdbdb] bg-[#fff] text-[#666666]"
        @click="clearText"
      >
        <span
          class="inline-block mr-2 w-4 h-4 align-middle bg-[url('//www.saraminimage.co.kr/sri/common/ico/ico_sri_input2.png')] bg-no-repeat bg-[0_-198px]"
        ></span>
        초기화
      </button>
    </div>
  </section>
</template>
<style scoped></style>

<script>
export default {
  name: "App",
  data() {
    return {
      textNum: 0,
      withoutEmptyNum: 0,
    };
  },
};
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div class="m-0 p-[30px] border-2 w-[600px] h-[600px] bg-slate-50">
      <textarea
        class="block overflow-y-scroll w-full h-[400px] border-none text-gray-700 text-[14px] leading-[22px] break-words resize-none m-0 p-0 font-inherit font-style-inherit font-weight-inherit placeholder:text-gray-400"
        placeholder="내용을 입력해주세요"
      ></textarea>
      <hr />
      <div>
        <div class="flex gap-[10px]">
          <p>공백 포함</p>
          <p>{{ textNum }}</p>
          <p>자</p>
          <p>{{ textNum }}</p>
          <p>byte</p>
        </div class="flex gap-[10px]">
        <div>
          <p>공백 제외</p>
          <p>{{ withoutEmptyNum }}</p>
        </div>
      </div>
      <hr />
      <div class="flex items-center justify-center">
        <div class="flex pt-[20px] pr-[20px] gap-[10px]">
          <button class="bg-slate-200 border-2 w-[150px] h-[40px]">
            전체 복사
          </button>
          <button class="border-2 border-2 w-[150px] h-[40px]">초기화</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

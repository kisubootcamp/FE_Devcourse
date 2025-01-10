<script setup>
const inputValue = ref("");
const inputValueLength = computed(() => inputValue.value.length);
const inputValueByte = computed(() => {
  const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return inputValue.value
    .split("")
    .reduce((acc, cur) => acc + (regx.test(cur) ? 2 : 1), 0);
});

const withoutSpace = computed(() => inputValue.value.replace(" ", ""));
const withoutSpaceLength = computed(() => withoutSpace.value.length);
const withoutSpaceByte = computed(() => {
  const regx = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return withoutSpace.value
    .split("")
    .reduce((acc, cur) => acc + (regx.test(cur) ? 2 : 1), 0);
});

const handleInput = (event) => (inputValue.value = event.target.value);
const handleReset = () => (inputValue.value = "");

watchEffect(() => {});
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
          <p class="px-[15px]">{{ inputValueLength }} 자</p>
          <p>{{ inputValueByte }} byte</p>
        </div>
        <div class="flex">
          <p>공백 제외</p>
          <p class="px-[15px]">{{ withoutSpaceLength }} 자</p>
          <p>{{ withoutSpaceByte }} byte</p>
        </div>
      </div>
      <div class="h-auto flex justify-center items-center p-[50px] border-t">
        <button type="button" class="border px-10 py-2" @click="handleReset">
          초기화
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

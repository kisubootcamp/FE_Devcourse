<script setup>
import { computed, ref } from "vue";

// ref
const text = ref("");

// methods
const setText = (event) => {
  text.value = event.target.value;
};
const copyText = () => {
  navigator.clipboard
    .writeText(text.value)
    .then(() => {
      alert("복사완료!!");
    })
    .catch(() => {
      alert("복사에 실패했습니다.");
    });
};
const resetText = () => {
  text.value = "";
};

// computed
const updatedTextLength = computed(() => {
  return text.value.length;
});
const updatedNoneSpaceTextLength = computed(() => {
  const noneSpace = text.value.replaceAll(" ", "");
  return noneSpace.length;
});
const updatedTextByte = computed(() => {
  return text.value
    .split("")
    .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
});
const updatedNoneSpaceTextByte = computed(() => {
  const noneSpace = text.value.replaceAll(" ", "");
  return noneSpace
    .split("")
    .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
});
</script>

<template>
  <article
    class="absolute w-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
  >
    <h1 class="text-[24px] font-bold mb-[50px]">글자수 세기</h1>
    <article class="w-full border p-[20px]">
      <textarea
        name="saramin"
        class="w-full h-[500px] border border-gray-500 mb-[20px]"
        @input="setText($event)"
        v-model="text"
      ></textarea>
      <hr />
      <article class="flex flex-col gap-[10px] mt-[10px]">
        <p class="font-bold">
          공백 포함
          <span class="text-orange-500">{{ updatedTextLength }}</span> 자 |
          <span class="text-orange-500">{{ updatedTextByte }}</span> byte
        </p>
        <p class="font-bold">
          공백 제외
          <span class="text-orange-500">{{ updatedNoneSpaceTextLength }}</span>
          자 |
          <span class="text-orange-500">{{ updatedNoneSpaceTextByte }}</span>
          byte
        </p>
      </article>
      <article class="flex gap-[5px] mt-[50px] justify-center">
        <button
          class="px-[50px] py-[10px] border bg-slate-500 text-white"
          @click="copyText"
        >
          전체복사
        </button>
        <button class="px-[50px] py-[10px] border" @click="resetText">
          초기화
        </button>
      </article>
    </article>
  </article>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref, onMounted } from "vue";

const text = ref("");
const charCount = ref(0);
const byteCount = ref(0);
const charCountOnly = ref(0);
const byteCountOnly = ref(0);

const updateCounts = (currentText) => {
  const trimmedText = currentText.replace(/\s/g, "");
  charCount.value = currentText.length;
  charCountOnly.value = trimmedText.length;
  const encoder = new TextEncoder();
  byteCount.value = encoder.encode(currentText).length;
  byteCountOnly.value = encoder.encode(trimmedText).length;
};

const copyText = () => {
  if (text.value.trim()) {
    navigator.clipboard.writeText(text.value).then(() => {
      alert("내용이 복사되었습니다.");
    });
  } else {
    alert("복사할 내용이 없습니다.");
  }
};

const resetText = () => {
  text.value = "";
  updateCounts(text.value);
};

const textareaRef = ref(null);

onMounted(() => {
  const textarea = textareaRef.value;

  textarea.addEventListener("input", (event) => {
    const currentText = event.target.value;
    updateCounts(currentText);
  });
});
</script>

<template>
  <div class="grid justify-center items-center w-full">
    <h1 class="text-[36px] font-bold mt-24">글자수 세기</h1>
    <div class="mt-8 p-8 max-w-4xl w-full border rounded-lg shadow-lg">
      <textarea
        ref="textareaRef"
        v-model="text"
        name="text"
        id="text"
        class="w-[800px] h-[400px] p-4 border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg resize-none"
        placeholder="내용을 입력해주세요."
      ></textarea>
      <div class="mt-4 text-sm text-gray-500 grid justify-between">
        <span>
          공백 포함: <span class="text-orange-500">{{ charCount }}</span
          >자 | <span class="text-orange-500">{{ byteCount }}</span> byte
        </span>
        <span>
          공백 제외: <span class="text-orange-500">{{ charCountOnly }}</span
          >자 | <span class="text-orange-500">{{ byteCountOnly }}</span> byte
        </span>
      </div>
      <div class="mt-4 flex justify-center space-x-4">
        <button
          @click="copyText"
          class="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200"
        >
          전체 복사
        </button>
        <button
          @click="resetText"
          class="px-4 py-2 bg-gray-100 border rounded-lg hover:bg-gray-200"
        >
          초기화
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

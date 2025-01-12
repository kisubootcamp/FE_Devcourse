<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const text = ref("");

    const inputLength = computed(() => text.value.length);
    const inputBytes = computed(() =>
      text.value
        .split("")
        .reduce((prev, cur) => prev + (cur.charCodeAt(0) > 127 ? 2 : 1), 0)
    );
    const inputWithoutlength = computed(
      () => text.value.replace(/\s+/g, "").length
    );
    const inputWithoutLengthBytes = computed(() =>
      text.value
        .replace(/\s+/g, "")
        .split("")
        .reduce((prev, cur) => prev + (cur.charCodeAt(0) > 127 ? 2 : 1), 0)
    );

    const handlechange = (event) => {
      text.value = event.target.value;
    };
    const handleCopyAll = async () => {
      if (text.value.trim().length === 0) {
        alert("복사할 텍스트가 없습니다!");
        return;
      }
      await navigator.clipboard.writeText(text.value);
      try {
        alert("복사 되었습니다!");
      } catch (error) {
        alert("복사 실패!");
      }
    };
    const handleInit = () => {
      text.value = "";
    };

    return {
      text,
      inputLength,
      inputBytes,
      inputWithoutlength,
      inputWithoutLengthBytes,
      handlechange,
      handleCopyAll,
      handleInit,
    };
  },
};
</script>
<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-gray-200 shadow-lg rounded-lg p-6 w-full max-w-lg">
      <h1 class="text-2xl font-bold text-center mb-4">글자 수 세기</h1>
      <textarea
        :value="text"
        @input="handlechange"
        placeholder="여기에 텍스트를 입력하세요..."
        class="w-full h-64 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <div class="mt-4">
        <p class="mb-2">
          공백 포함:
          <span class="text-blue-600 font-bold">{{ inputLength }}</span> 자

          <span class="text-blue-600 font-bold">
            {{ inputBytes }}
          </span>
          byte
        </p>

        <p>
          공백 제외:
          <span class="text-blue-600 font-bold">{{ inputWithoutlength }}</span>
          자

          <span class="text-blue-600 font-bold">{{
            inputWithoutLengthBytes
          }}</span>
          byte
        </p>
      </div>

      <div class="flex justify-between items-center mt-6">
        <button
          @click="handleCopyAll"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          전체 복사
        </button>
        <button
          @click="handleInit"
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          초기화
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

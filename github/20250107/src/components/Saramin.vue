<script>
export default {
  name: "Saramin",
  data() {
    return {
      text: "",
      charCount: 0,
      byteCount: 0,
      charCountOnly: 0,
      byteCountOnly: 0,
    };
  },
  methods: {
    updateCounts(currentText) {
      const trimmedText = currentText.replace(/\s/g, "");
      this.charCount = currentText.length;
      this.charCountOnly = trimmedText.length;
      const encoder = new TextEncoder();
      this.byteCount = encoder.encode(currentText).length;
      this.byteCountOnly = encoder.encode(trimmedText).length;
    },

    copyText() {
      if (this.text.trim()) {
        navigator.clipboard.writeText(this.text).then(() => {
          alert("내용이 복사되었습니다.");
        });
      } else {
        alert("복사할 내용이 없습니다.");
      }
    },

    resetText() {
      this.text = "";
      this.updateCounts();
    },
  },
  mounted() {
    const textarea = this.$refs.textarea;
    textarea.addEventListener("input", (event) => {
      const currentText = event.target.value;
      this.updateCounts(currentText);
    });
  },
};
</script>

<template>
  <div class="grid justify-center items-center w-full">
    <h1 class="text-[36px] font-bold mt-24">글자수 세기</h1>
    <div class="mt-8 p-8 max-w-4xl w-full border rounded-lg shadow-lg">
      <textarea
        ref="textarea"
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

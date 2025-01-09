<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onInput(event) {
      this.text = event.target.value;
    },
    resetText() {
      this.text = "";
    },
  },
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">
        글자수세기
      </h2>

      <textarea
        v-model="text"
        @input="onInput"
        placeholder="여기에 글자를 입력하세요"
        class="w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>

      <p class="mt-4 text-gray-700 text-center">
        글자 수: <span class="font-semibold">{{ text.length }}</span>
      </p>

      <div class="flex justify-between mt-6">
        <button
          @click="resetText"
          class="w-1/2 px-4 py-2 mr-2 text-black rounded-lg focus:outline-none focus:ring-2"
        >
          초기화
        </button>
        <button
          class="w-1/2 px-4 py-2 ml-2 text-white rounded-lg focus:outline-none focus:ring-2 bg-slate-400"
        >
          전체 복사
        </button>
      </div>
    </div>
  </div>
</template>

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
    copyToClipboard() {
      navigator.clipboard.writeText(this.query).catch((err) => {
        console.error("복사 실패:", err);
      });
    },
    resetQuery() {
      this.query = "";
    },
  },
  computed: {
    byte() {
      let count = 0;
      for (const char of this.query) {
        if (/[\uAC00-\uD7A3]/.test(char)) {
          count += 2;
        } else {
          count += 1;
        }
      }
      return count;
    },
    spaceRemovalByte() {
      const count =
        this.byte - (this.query.length - this.query.replace(/ /g, "").length);
      return count;
    },
  },
};
</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <form>
      <textarea
        placeholder="내용을 입력해주세요."
        :value="query"
        @input="handleInput"
        class="w-[400px] h-[400px] border-solid border-[#e3e3e3] border-2"
        >{{ query }}</textarea
      >
      <section class="p-[10px]">
        <p>
          공백 포함 <span class="text-[orange]">{{ query.length }}</span
          >자 | {{ byte }} byte
        </p>
        <p>
          공백 제거
          <span class="text-[orange]">{{ query.replace(/ /g, "").length }}</span
          >자 | <span class="text-[orange]"></span>{{ spaceRemovalByte }} byte
        </p>
      </section>
      <footer class="flex justify-center p-[10px]">
        <button
          type="button"
          @click="copyToClipboard"
          class="w-[180px] h-[45px] bg-[#e3e3e3] border mr-1"
        >
          전체 복사
        </button>
        <button
          type="button"
          @click="resetQuery"
          class="w-[180px] h-[45px] bg-[ffffff] border"
        >
          초기화
        </button>
      </footer>
    </form>
  </div>
</template>
<style></style>

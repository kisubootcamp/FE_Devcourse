<script>
import Button from "@/components/Button.vue";
export default {
  name: "Editor",
  components: {
    Button,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handleUpdate(event) {
      const value = event.target.value;
      this.content = value;
    },
    byteCount(str) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode <= 0x7f) {
          count += 1;
        } else if (charCode <= 0x7ff) {
          count += 2;
        } else if (charCode <= 0xffff) {
          count += 3;
        } else {
          count += 4;
        }
      }
      return count;
    },
    handleCopy() {
      document.getElementById("editor").select();
      document.execCommand("copy");
      alert("Copy Text");
    },
    handleReset() {
      this.content = "";
    },
  },
};
</script>
<template>
  <form class="w-full p-4 border border-gray-200 flex flex-col gap-4">
    <textarea
      id="editor"
      v-model="content"
      class="w-full focus:outline-none"
      rows="20"
      placeholder="내용을 입력해주세요"
      @keyup="handleUpdate($event)"
    ></textarea>

    <div class="w-full border-t border-gray-200 p-5 flex flex-col gap-4">
      <div>
        공백 포함
        <span class="font-bold text-orange-500">{{ content.length }}</span> 자 |
        <span class="font-bold text-orange-500">{{ byteCount(content) }}</span>
        byte
      </div>
      <div>
        공백 제외
        <span class="font-bold text-orange-500">{{
          content.replace(/\s+/g, "").length
        }}</span>
        자 |
        <span class="font-bold text-orange-500">{{
          byteCount(content.replace(/\s+/g, ""))
        }}</span>
        byte
      </div>
    </div>

    <div class="flex items-center justify-center gap-2">
      <Button
        type="button"
        text="전체복사"
        :fullBg="true"
        :onClick="handleCopy"
      />
      <Button type="button" text="초기화" :onClick="handleReset" />
    </div>
  </form>
</template>
<style scoped></style>

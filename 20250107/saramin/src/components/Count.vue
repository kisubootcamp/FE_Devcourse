<script>
export default {
  name: 'Count',
  data() {
    return {};
  },
  props: {
    isIncludeBlank: Boolean,
    length: Number,
    byte: Number
  },
  computed: {
    title() {
      return this.isIncludeBlank ? '공백 포함' : '공백 제외';
    }
  }
};
</script>
<template>
  <p class="flex items-center text-base text-[#444]">
    <span class="text-sm">{{ title }}</span>
    <strong class="ml-4 text-[#ff662f] mr-1.5 font-bold">{{ length }}</strong>
    <span>자</span>
    <hr class="w-[1px] h-[15px] bg-[#dbdbdb] mx-3" />
    <strong class="font-bold mr-1.5">{{ byte }}</strong>
    <span>byte</span>
  </p>
</template>
<style scoped>
  
</style>
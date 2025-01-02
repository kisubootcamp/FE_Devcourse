<script>
export default {
  name: "EX2_5",
  data() {
    return {
      selectedOption: "bold",
    };
  },
};
</script>

<template>
  <div>
    <select v-model="selectedOption">
      <option value="bold">굵은 텍스트</option>
      <option value="italic">기울임 텍스트</option>
      <option value="none">일반 텍스트</option>
    </select>

    <div
      v-if="selectedOption === 'bold'"
      v-html="'<strong>텍스트</strong>'"
    ></div>
    <div
      v-else-if="selectedOption === 'italic'"
      v-html="'<em>텍스트</em>'"
    ></div>
    <div v-else>일반 텍스트</div>
  </div>
</template>

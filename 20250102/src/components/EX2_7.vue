<script>
export default {
  name: "DynamicHighlight",
  data() {
    return {
      isHighlighted: true,
    };
  },
};
</script>

<template>
  <div>
    <button @click="isHighlighted = !isHighlighted">
      {{ isHighlighted ? "일반 텍스트로 변경" : "하이라이트로 변경" }}
    </button>

    <div
      v-if="isHighlighted"
      v-html="
        '<span style=\'background-color:yellow;\'>하이라이트된 텍스트</span>'
      "
    ></div>
    <div v-else v-text="'일반 텍스트'"></div>
  </div>
</template>

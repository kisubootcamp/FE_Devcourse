<script>
export default {
  data() {
    return {
      text: "",
      currentLengthWithSpaces: 0,
      currentLengthWithoutSpaces: 0,
      currentByteWithSpaces: 0,
      currentByteWithoutSpaces: 0,
    };
  },
  methods: {
    updateCharacterCount() {
      this.currentLengthWithSpaces = this.text.length;
      this.currentLengthWithoutSpaces = this.text.replace(/\s+/g, "").length;
      this.currentByteWithSpaces = new TextEncoder().encode(this.text).length;
      this.currentByteWithoutSpaces = new TextEncoder().encode(
        this.text.replace(/\s+/g, "")
      ).length;
    },
    copyText() {
      navigator.clipboard.writeText(this.text).then(() => {
        alert("copy text!");
      });
    },
    clearText() {
      this.text = "";
      this.updateCharacterCount();
    },
  },
};
</script>

<template>
  <div class="character-counter">
    <h1 class="title">글자 수 세기</h1>
    <textarea
      v-model="text"
      @input="updateCharacterCount"
      placeholder="내용을 입력해주세요."
      class="textarea"
    ></textarea>
    <div class="info">
      <p>
        공백 포함:
        <span class="highlight">{{ currentLengthWithSpaces }}</span> 자 |
        <span class="highlight">{{ currentByteWithSpaces }}</span> byte
      </p>
      <p>
        공백 제외:
        <span class="highlight">{{ currentLengthWithoutSpaces }}</span> 자 |
        <span class="highlight">{{ currentByteWithoutSpaces }}</span> byte
      </p>
    </div>
    <div class="buttons">
      <button @click="copyText" class="btn-copy">전체 복사</button>
      <button @click="clearText" class="btn-clear">초기화</button>
    </div>
  </div>
</template>

<style scoped>
.character-counter {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 30px;
}

.textarea {
  width: 100%;
  min-height: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  outline: none;
  resize: none;
}

.textarea:focus {
  border-color: skyblue;
}

.info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
}

.highlight {
  color: #f97316;
  font-weight: bold;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.btn-copy {
  background-color: #d3d3d3;
  color: white;
  width: 150px;
  padding: 10px 8px;
}

.btn-clear {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  width: 150px;
}
</style>

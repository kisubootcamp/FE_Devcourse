<script setup>
import { computed, ref } from "vue";

const inputText = ref("");
const inputLength = computed(() => inputText.value.length);
const inputBytes = computed(() =>
  inputText.value
    .split("")
    .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0)
);
const inputWithoutEmptyLength = computed(
  () => inputText.value.replaceAll(" ", "").length
);
const inputWithoutEmptyBytes = computed(() =>
  inputText.value
    .replaceAll(" ", "")
    .split("")
    .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0)
);

const handleChange = (event) => {
  inputText.value = event.target.value;
};
const copyText = () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(inputText.value)
      .then(() => {
        alert("복사되었습니다.");
      })
      .catch((err) => {
        alert("복사에 실패했습니다.", err.message);
      });
  } else {
    // 구형 브라우저
    const textArea = document.createElement("textarea");
    textArea.value = inputText.value;
    document.body.appendChild(textArea);
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (successful) {
      alert("복사에 성공했습니다.");
    } else {
      alert("복사 실패");
    }
  }
};
const clear = () => {
  inputText.value = "";
};
</script>
<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          :value="inputText"
          @input="handleChange"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ inputLength }}</span> 자 |
          <span>{{ inputBytes }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ inputWithoutEmptyLength }}</span> 자 |
          <span>{{ inputWithoutEmptyBytes }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="copyText">전체복사</button>
        <button @click="clear">초기화</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.saramin {
  width: 564px;
  margin: 100px auto;
}

.saramin .box {
  border-top: 1px solid #676767;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-block: 1px solid #ddd;
}

.saramin h1 {
  font-size: 32px;
  margin-bottom: 50px;
  line-height: 1;
  font-weight: normal;
}

.saramin .string-length {
  padding: 30px;
}

.saramin .string-length textarea {
  width: 100%;
  height: 400px;
  border: none;
}

.saramin .str-info {
  border-top: 1px solid #ebebeb;
  padding: 0 22px;
  font-size: 14px;
  margin: 0px 8px;
}

.saramin .str-info span {
  font-size: 15px;
  color: #ff662f;
  font-weight: bold;
}

.saramin .btn-area {
  background-color: #fbfbfb;
  padding: 35px 0;
  text-align: center;
}

.saramin .btn-area button {
  background: transparent;
  border: 1px solid #d9d9d9;
  width: 160px;
  height: 40px;
  margin: 0 2px;
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      text: "",
      textLength: 0,
      noneSpaceTextLength: 0,
      textByte: 0,
      noneSpaceTextByte: 0,
    };
  },
  methods: {
    setText(event) {
      this.text = event.target.value;
    },
    copyText() {
      navigator.clipboard
        .writeText(this.text)
        .then(() => {
          alert("복사완료!!");
        })
        .catch(() => {
          alert("복사에 실패했습니다.");
        });
    },
    resetText() {
      this.text = "";
    },
  },
  computed: {
    updatedTextLength() {
      return this.text.length;
    },
    updatedNoneSpaceTextLength() {
      const noneSpace = this.text.replaceAll(" ", "");
      return noneSpace.length;
    },
    updatedTextByte() {
      return this.text
        .split("")
        .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
    },
    updatedNoneSpaceTextByte() {
      const noneSpace = this.text.replaceAll(" ", "");
      return noneSpace
        .split("")
        .reduce((acc, cur) => acc + (cur.charCodeAt(0) > 127 ? 2 : 1), 0);
    },
  },
};
</script>

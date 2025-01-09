<script>
  import Count from './components/Count.vue';
  export default {
    name: 'App',
    components: {
      Count,
    },
    data() {
      return {
        content: '',
        lengthWithBlank: 0,
        lengthWithoutBlank: 0,
        byteWithBlank: 0,
        byteWithoutBlank: 0,
      };
    },
    methods: {
      handleCopy() {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(this.content)
            .then(() => {
              alert('복사가 완료되었습니다.');
            })
            .catch(() => {
              alert('복사에 실패했습니다.');
            });
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = this.inputText;
          document.body.appendChild(textArea);
          textArea.select();
          const successful = document.execCommand('copy');
          document.body.removeChild(textArea);

          if (successful) {
            alert('복사가 완료되었습니다.');
          } else {
            alert('복사에 실패했습니다.');
          }
        }
      },
      handleClear() {
        this.content = '';
        this.lengthWithBlank = 0;
        this.lengthWithoutBlank = 0;
        this.byteWithBlank = 0;
        this.byteWithoutBlank = 0;
      },
      handleInput($event) {
        const value = $event.target.value;
        this.content = value;
        this.countLength(value);
        this.calculateByteLength(value);
      },
      countLength(value) {
        this.lengthWithBlank = value.length;
        this.lengthWithoutBlank = value.replace(/\s/g, '').length;
      },
      calculateByteLength(value) {
        let withBlank = 0;
        let withoutBlank = 0;

        for (let i = 0; i < value.length; i++) {
          const charCode = value.charCodeAt(i);
          if (/\s/.test(value[i])) {
            withBlank += 1;
          } else if (charCode > 127) {
            withBlank += 2;
            withoutBlank += 2;
          } else {
            withBlank += 1;
            withoutBlank += 1;
          }
        }

        this.byteWithBlank = withBlank;
        this.byteWithoutBlank = withoutBlank;
      },
    },
  };
</script>
<template>
  <div class="flex items-center justify-center min-h-screen">
    <main class="bg-[#f8f8f8] w-fit border border-[#ddd] border-t-[#676767]">
      <h1 class="font-bold text-lg mx-8 mt-8">글자수 세기</h1>
      <section class="p-8">
        <textarea
          :value="content"
          placeholder="내용을 입력해주세요"
          class="resize-none w-[504px] p-1 bg-white h-[401px] overflow-y-scroll text-sm text-[#444] break-all leading-[22px] focus:outline-[#003fe5]"
          @input="handleInput" />
      </section>
      <section
        class="border-t border-b border-[#ebebeb] pt-[13px] pb-4 px-5 mx-2 flex flex-col gap-2">
        <Count
          :isIncludeBlank="true"
          :length="lengthWithBlank"
          :byte="byteWithBlank" />
        <Count
          :isIncludeBlank="false"
          :length="lengthWithoutBlank"
          :byte="byteWithoutBlank" />
      </section>
      <section class="py-8 flex gap-1.5 justify-center">
        <button
          type="button"
          class="h-10 w-[160px] bg-[#9c9c9c] text-white border border-[#8f8f8f]"
          @click="handleCopy">
          전체 복사
        </button>
        <button
          type="button"
          class="h-10 w-[160px] bg-white text-[#666] border border-[#dbdbdb]"
          @click="handleClear">
          초기화
        </button>
      </section>
    </main>
  </div>
</template>
<style scoped>
  main {
    font-family: 'Pretendard', sans-serif;
  }
</style>

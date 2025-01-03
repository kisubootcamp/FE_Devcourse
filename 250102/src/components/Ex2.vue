<template>
  <div>
    <p v-if="userState === 'loading'">데이터를 로딩 중입니다...</p>
    <p v-else-if="userState === 'error'">에러가 발생했습니다</p>
    <p v-else-if="userState === 'success'">데이터 로딩 완료!</p>
    <p v-else-if="userState === 'idle'">대기 중</p>
    <button @click="changeuserState(`loading`)">로딩</button>
    <button @click="changeuserState(`error`)">에러</button>
    <button @click="changeuserState('success')">완료</button>
    <button @click="changeuserState('idle')">대기</button>
    <hr />
  </div>
  <div>
    <p v-if="isHtml" v-html="htmlContent2"></p>
    <p v-else v-text="exText2"></p>
    <button @click="changeIsHtml"> 최소 1700만원 </button>
    <hr/>
  </div>
  <div>
    <div v-show="auth === 'admin'">관리자 메뉴</div>
    <div v-show="auth === 'editor'" >편집자 메뉴</div>
    <div v-show="auth === 'viewer'">읽기 전용 메뉴</div>
    <button @click="changeAuth('admin')"> 관리만 해 </button>
    <button @click="changeAuth('editor')"> 편집만 해 </button>
    <button @click="changeAuth('viewer')"> 읽기만 해 </button>
    <hr />
  </div>
  <div>
    <p v-if="status === 'loggedIn' && accountType === 'basic'">기본 계정으로 로그인 중</p>
    <p v-else-if="status === 'loggedIn' && accountType === 'premium'">프리미엄 계정으로 로그인 중</p>
    <p v-else-if="status === 'loggedOut'" >로그인 필요</p>
    <p v-else-if="status === 'banned'">계정 정지</p>
    <button @click="changeType('basic')">베이직 로그인</button>
    <button @click="changeType('premium')">감사합니다 프리미엄</button>
    <button @click="changeStatus('loggedIn')" >로그인</button>
    <button @click="changeStatus('loggedOut')" >로그아웃</button>
    <button @click="changeStatus('banned')">너 밴</button>
    <hr />
  </div>
  <div>
    <p v-if="selectedOption === 'bold'" v-html="strongText"></p>
    <p v-else="selectedOption === 'italic'" v-html="italicText"></p>
    <button @click="changeStyle('bold')"> 강조! </button>
    <button @click="changeStyle('italic')"> 기울임! </button>
    <hr/>
  </div>
  <div>
    <p v-if="buyState === 'inCart'">장바구니에 상품이 있습니다</p>
    <p v-else-if="buyState === 'purchased'">구매 완료</p>
    <p v-else-if="buyState === 'abandoned'">구매가 취소되었습니다</p>
    <button @click="changeBuyState('inCart')">장바구니 담기</button>
    <button @click="changeBuyState('purchased')">구매하기</button>
    <button @click="changeBuyState('abandoned')">환불하기</button>
    <hr/>
  </div>
  <div>
    <p v-if="isHighlighted" v-html="highlightedText"></p>
    <p v-else="!isHighlighted" v-text="normalText"></p>
    <button @click="toggleHighlight">하이라이트</button>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        userState: '',
        htmlContent2: '나야나',
        exText2: '허리 뿌드득',
        isHtml: true,
        auth: 'admin',
        status: 'loggedIn',
        accountType: 'basic',
        selectedOption: 'bold',
        strongText: "<string>나는야 퉁퉁이</string>",
        italicText: "<em>나는야 비실이</em>",
        buyState: 'inCart',
        isHighlighted: true,
        highlightedText: "<strong> 야호 </strong>",
        normalText: "야호",
      };
    },
    methods: {
      changeuserState(newUserState){
        this.userState = newUserState;
      },
      changeIsHtml() {
        this.isHtml = !this.isHtml;
      },
      changeAuth(newAuth){
        this.auth = newAuth;
      },
      changeStatus(newStatus){
        this.status = newStatus;
      },
      changeType(newType){
        this.accountType = newType;
      },
      changeStyle(newStyle){
        this.selectedOption = newStyle;
      },
      changeBuyState(newBuyState){
        this.buyState = newBuyState;
      },
      toggleHighlight(){
        this.isHighlighted = !this.isHighlighted;
      }

    }
  }
</script>

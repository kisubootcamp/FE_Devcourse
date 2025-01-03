/*
  SFC(Single File Component)
  # 화면의 특정 영역에 대한 HTML, CSS, JS를 하나의 파일에 모은 컴포넌트 파일
  # Vue 컴포넌트 .vue 파일과 같다
  # vue만의 독자적인 시스템
  # template 태그는 반드시 하나 이상 존재해야 한다
  # 우리가 알고 있는 언어들을 그대로 사용하면 된다
*/

// 데이터 보간법, {{  }} (콧수염 문법, Mustache Syntax)
//

/*
  디렉티브(directive), vue에만 존재하는 특별한 문법 : v-[]
  # v-html : HTML 태그 사용
  # v-text : 단순히 텍스트로 출력
  # v-pre : 컴파일을 건너뛰게 함
  # v-bind: 데이터를 속성에 바인딩 할 때 사용 -> 축약 속성 :만을 사용, 축약 속성과 데이터 이름이 같으면 한 번만 사용
    v-bind:id='id'
    :id='id'
    :id (-> vue 3.4 이상에서만 사용 가능)
  # v-if, v-else-if, v-else : 조건부 렌더링
    v-if는 조건문으로 렌더링 자체를 하지 않으나, v-show는 display: hidden 속성으로 안 보이게 하는 것 뿐

*/

/*
  옵션스 API -> Vue2에서 사용하는 방식
  # name 속성
  # data 속성
*/

// name: "App", // 컴포넌트의 이름 -> 파일 이름과 똑같이 작성해주면 된다(권장)
// vue에서 사용할 데이터 정의 : data(){}
// 컴포지션 API -> Vue3에서 사용하는 방식

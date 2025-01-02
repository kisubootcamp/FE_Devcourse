### SFC 구조
- template 태그 : 1개만 사용 가능 (필수)
- script 태그 : 1개만 사용 가능 (선택)
- style 태그 : 1개만 사용 가능 (선택)

#### React와 다른점
- HTML 속성을 바꿔서 사용해야 하는 점이 없음
  - React는 class 예약어가 있어서 HTML class 속성을 className으로 변경해서 사용했음
- Vue는 예약어가 있다고 해도 그냥 사용 가능

---

리액트는 클래스형 컴포넌트 -> 함수형 컴포넌트로 변경되면서 성능 차이가 크게 발생하여 19버전까지 나온 지금은 클래스형 컴포넌트를 과감히 버리고 함수형 컴포넌트로 거의 다 대체되어 있는 상황

반면, vue의 경우 옵션스 API와 컴포지션 API에 큰 차이가 없어서, 여전히 vue2로 개발했던 회사들은 옵션스 API를 사용하는 곳이 많을 것. 따라서, 둘 다 배우는 것이 좋음

### 디렉티브
- v-html : HTML 태그가 포함될 때, 태그를 html로 반영해서 출력
- v-text : HTML 태그가 포함될 때, 태그까지 텍스트로 치환 출력
- v-pre : 컴파일을 건너띄게 함 => 컴파일 성능에 도움이 됨
- v-bind : 데이터를 속성에 바인딩할 때 사용
  - `<div id={{main}}></div>` 이런 거 안됨
  - `<div v-bind:id="main"></div>` 이렇게 해야함
  - `<div :id="main"></div>` 이렇게 축약 가능 (vue 3.4 이상 가능)
  - 만약 속성명과 데이터명이 같으면 `<div :id></div>`로도 가능
  - 조건 처리 가능
    - `<h1 :class="isActive ? 'active'  : 'inactive'">condition</h1>`
- v-if, v-else-if, v-else: 조건부 렌더링
- v-show: 조건부 렌더링 (디테일 처리는 못한 단순하게 보여주냐, 안 보여주냐)
  - 자주 스위칭 되는 건 이걸로 하는 것이 좋다

### extension
- vbase : 옵션스 api
- vbase
export default function FormWitReducer() {
  //  useReducer로 form 요소 제어하기
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" />
        </div>

        <div>에러</div>
        <button>회원가입</button>
      </form>
    </>
  );
}

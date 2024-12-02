import { ChangeEvent, useReducer } from 'react';

interface ReducerState {
  name: string;
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface ReducerAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}

const initialState = {
  name: '',
  email: '',
  password: '',
  isSubmit: false,
  error: '',
};

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field!]: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'SUBMIT_START':
      return { ...state, isSubmit: true };
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmit: false };
    case 'SUBMIT_END':
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.password) {
      // 에러처리
      dispatch({ type: 'SET_ERROR', error: '입력 값을 모두 입력하세요' });
      return;
    }

    if (state.isSubmit) return;
    dispatch({ type: 'SET_ERROR', error: '' });
    dispatch({ type: 'SUBMIT_START' });

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: 'SUBMIT_SUCCESS' });
    } catch (error) {
      if (error) dispatch({ type: 'SET_ERROR', error: '폼 전송 중 에러 발생' });
    } finally {
      dispatch({ type: 'SUBMIT_END' });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          이름 :
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          이메일 :
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={changeHandler}
          />
        </label>
        <label>
          비밀번호 :
          <input
            type='password'
            name='password'
            value={state.password}
            onChange={changeHandler}
          />
        </label>
        {state.error && <div style={{ color: 'red' }}>{state.error}</div>}
        <button type='submit' disabled={state.isSubmit}>
          회원가입
        </button>
      </form>
    </>
  );
}

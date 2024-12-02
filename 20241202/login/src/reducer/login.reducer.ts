import { LoginState, LoginAction } from '../types/login';

export const initialState: LoginState = {
  email: "",
  password: "",
  agree: false,
  isSubmit: false,
  error: "",
};

export function loginReducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case "SET_FIELD":
      // [key] => 계산된 속성
      return { ...state, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SUBMIT_START":
      return { ...state, isSubmit: true, error: "" };
    case "SUBMIT_SUCCESS":
      return { ...state, isSubmit: false };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
}
export const loginReducer = (
  state: LoginReducerState,
  action: LoginReducerAction
) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, mail: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_AGREE":
      return { ...state, agree: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

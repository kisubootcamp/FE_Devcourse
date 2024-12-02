export const loginReducer = (
  state: LoginReducerState,
  action: LoginReducerAction
) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field!]: action.value };
    case "SET_AGREE":
      return { ...state, agree: !state.agree };
    case "SET_ALERT":
      return { ...state, alert: action.alert || "" };
    case "SUBMIT_START":
      return { ...state, isSubmit: true };
    case "SUBMIT_END":
      return { ...state, isSubmit: false };
    default:
      return state;
  }
};

export function reducer(
  agree: ReducerState,
  action: ReduceAction
): ReducerState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...agree, [action.field!]: action.value };
    case "SET_ERROR":
      return { ...agree, error: action.error };
    case "SUBMIT_START":
      return { ...agree, isSubmit: true };
    case "SUBMIT_SUCCESS":
      return { ...agree, isSubmit: false };
    case "SUBMIT_END":
      return { ...agree, isSubmit: false };
    default:
      return agree;
  }
}

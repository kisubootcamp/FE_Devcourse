interface LoginReducerState {
  email: string;
  password: string;
  agree: boolean;
  error: string;
}

type LoginReducerAction =
  | {
      type: "SET_EMAIL";
      payload: string;
    }
  | {
      type: "SET_PASSWORD";
      payload: string;
    }
  | {
      type: "SET_AGREE";
      payload: boolean;
    }
  | {
      type: "SET_ERROR";
      payload: string;
    };

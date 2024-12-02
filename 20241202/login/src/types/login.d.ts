export interface LoginState {
  email: string;
  password: string;
  agree: boolean;
  isSubmit: boolean;
  error?: string;
}

export interface LoginAction {
  type: "SET_FIELD" | "SET_ERROR" | "SUBMIT_START" | "SUBMIT_SUCCESS" | "SUBMIT_END";
  field?: string;
  value?: string | boolean;
  error?: string;
}
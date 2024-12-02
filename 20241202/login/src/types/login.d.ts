interface LoginReducerState {
  mail: string;
  password: string;
  agree: boolean;
  alert: string;
  isSubmit: boolean;
}

interface LoginReducerAction {
  type: string;
  field?: string;
  value?: string;
  alert?: string;
  agree?: boolean;
}

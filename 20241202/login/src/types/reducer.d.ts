interface IReducerState {
  email: string;
  password: string;
  isSubmit: boolean;
  error?: string;
}

interface IReduceAction {
  type: string;
  field?: string;
  value?: string;
  error?: string;
}
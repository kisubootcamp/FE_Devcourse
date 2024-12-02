interface ReducerState {
  email: string;
  password: string;
  isChecked: boolean;
  isSubmit: boolean;
  error?: string;
}
interface ReduceAction {
  type: string;
  field?: string;
  value?: string | boolean;
  error?: string;
}

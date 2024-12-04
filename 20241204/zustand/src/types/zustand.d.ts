type CounterStoreType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

type User = {
  name: string;
  age: number;
};

type AuthStoreType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};
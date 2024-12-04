interface CounterStoreType {
  count: number;
  plus: () => void;
  minus: () => void;
  reset: () => void;
}

interface AuthStoreType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  name: string;
  age: number;
}

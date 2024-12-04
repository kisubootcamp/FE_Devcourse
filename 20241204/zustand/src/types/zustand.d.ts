interface User {
  name: string;
  age: number;
}

interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface AuthScoreType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

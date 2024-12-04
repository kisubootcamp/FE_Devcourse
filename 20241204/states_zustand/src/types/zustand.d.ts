interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface User {
  name: string;
  age: number;
}
interface AuthStoreType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

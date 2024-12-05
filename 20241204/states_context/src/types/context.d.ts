interface User {
  name: string;
  age: number;
}

interface AuthContextType {
  user: user | null;
  isLoggedIn: boolean;
}

interface AuthActionContextType {
  login: (user: User) => void;
  logout: () => void;
}

import { create } from "zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  isLoggedIn: false,

  login: () => set((state) => ({ user: state.user, isLoggedIn: true })),
  logout: () => set(() => ({ user: null, isLoggedIn: false })),
}));

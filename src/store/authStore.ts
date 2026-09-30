import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, users } from '../data/mockData';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, _password: string) => {
        const foundUser = users.find(u => u.email === email);
        if (foundUser) {
          set({ user: foundUser, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      register: (name: string, email: string, _password: string) => {
        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          role: 'student',
          isActive: true,
          createdAt: new Date().toISOString().split('T')[0],
          lastLogin: new Date().toISOString().split('T')[0]
        };
        set({ user: newUser, isAuthenticated: true });
        return true;
      }
    }),
    { name: 'auth-storage' }
  )
);

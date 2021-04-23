export type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (newToken: string) => void,
}

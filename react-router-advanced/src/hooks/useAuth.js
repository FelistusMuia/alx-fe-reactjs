import { useState } from "react";

export function useAuth() {
  // In a real app, you'd check authentication via context or tokens
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
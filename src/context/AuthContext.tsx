import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from '../utils/jwt';

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  authTokens: string | null;
  setAuthTokens: (tokens: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [authTokens, setAuthTokens] = useState<string | null>(localStorage.getItem('authTokens'));
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  };

  useEffect(() => {
    if (authTokens) {
      const decodedToken = decodeToken(authTokens);
      if (decodedToken) {
        setUser(decodedToken.user);
      } else {
        logout();
      }
    }
  }, [authTokens]);

  const updateAuthTokens = (tokens: string) => {
    setAuthTokens(tokens);
    localStorage.setItem('authTokens', tokens);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, authTokens, setAuthTokens: updateAuthTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export type { AuthContextType };

import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../context/AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useRequireAuth = (): AuthContextType => {
  const context = useAuth();
  if (!context.user) {
    throw new Error('User is not authenticated');
  }
  return context;
};

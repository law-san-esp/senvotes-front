import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import Loader from '../components/Loader';
import { useAuth } from '../hooks/useAuth';
import { AxiosError } from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { setAuthTokens } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login({ email, password });
      navigate('/verification', { state: { user_token: response.data.user_token } });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message || 'An error occurred');
      } else {
        setError('An error occurred');
      }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Connexion</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-700 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mot de passe</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-700 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 rounded" disabled={loading}>
          {loading ? <Loader /> : 'Se connecter'}
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verify } from '../api/api';
import Loader from '../components/Loader';
import { useAuth } from '../hooks/useAuth';
import { AxiosError } from 'axios';

const Verification: React.FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setAuthTokens } = useAuth();
  const { user_token } = location.state as { user_token: string };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await verify({ code, user_token });
      setAuthTokens(response.data.authToken);
      console.log("auth token: ", response.data.authToken);
      //set a token in local storage
      localStorage.setItem('authTokens', response.data.authToken);
      navigate('/dashboard');
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
      <form onSubmit={handleVerify} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Vérification</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Code de vérification</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 rounded" disabled={loading}>
          {loading ? <Loader /> : 'Vérifier'}
        </button>
      </form>
    </div>
  );
};

export default Verification;

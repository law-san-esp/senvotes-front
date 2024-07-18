import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Ne pas afficher la Navbar sur les pages de connexion et d'inscription
  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/verification') {
    return null;
  }

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link 
        to="/" 
        className={`text-2xl font-bold ${user && user.role === 'ADMIN' ? 'text-red' : 'text-normal'}`}
      >
        SENVOTES
      </Link>
      <div className="flex space-x-4">
        {user ? (
          <>
            {user.role === 'CLIENT' && (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/vote">Vote</Link>
              </>
            )}
            {user.role === 'ADMIN' && (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/admin">Admin</Link>
              </>
            )}
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

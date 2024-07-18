import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold">Bienvenue sur SenVotes</h1>
        <p className="mt-4">Une application de vote électronique sécurisée.</p>
        <div className="mt-8 flex space-x-4">
          <Link to="/register" className="px-4 py-2 bg-blue-600 rounded text-white">Inscription</Link>
          <Link to="/login" className="px-4 py-2 bg-gray-600 rounded text-white">Connexion</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

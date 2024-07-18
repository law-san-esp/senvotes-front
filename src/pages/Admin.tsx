import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { createEvent } from '../api/api';

const Admin: React.FC = () => {
  const [name, setName] = useState('');
  const [options, setOptions] = useState(['']);
  const [limitDate, setLimitDate] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent({ name, options, limit_date: limitDate });
      enqueueSnackbar('Événement créé avec succès', { variant: 'success' });
      navigate('/dashboard');
    } catch (error) {
      enqueueSnackbar('Erreur lors de la création de l\'événement', { variant: 'error' });
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleCreateEvent} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Créer un Événement</h2>
        <div className="mb-4">
          <label className="block mb-2">Nom de l'événement</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date limite</label>
          <input
            type="date"
            className="w-full px-4 py-2 bg-gray-700 rounded"
            value={limitDate}
            onChange={(e) => setLimitDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Options</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              className="w-full px-4 py-2 bg-gray-700 rounded mb-2"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <button type="button" onClick={addOption} className="bg-blue-600 px-4 py-2 rounded mt-2">
            Ajouter une option
          </button>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 rounded">
          Créer l'événement
        </button>
      </form>
    </div>
  );
};

export default Admin;

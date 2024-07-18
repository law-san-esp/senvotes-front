import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById, vote } from '../api/api';
import { useSnackbar } from 'notistack';

const Vote: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(id!);
        console.log(response.data);
        setEvent(response.data);
      } catch (error) {
        setError('Failed to fetch event data');
      }
    };

    fetchEvent();
  }, [id]);

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await vote({ event_id: id!, option: selectedOption });
      enqueueSnackbar('Vote soumis avec succès', { variant: 'success' });
      navigate('/dashboard');
    } catch (error) {
      enqueueSnackbar('Échec de la soumission du vote', { variant: 'error' });
      setError('Failed to submit vote');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Vote</h1>
      {event ? (
        <form onSubmit={handleVote} className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
          <p>Date limite: {new Date(event.limit_date).toLocaleDateString()}</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            {event.options && event.options.map((option: string, index: number) => (
              <div key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    className="form-radio"
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </div>
            ))}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 rounded">
            Soumettre le vote
          </button>
        </form>
      ) : (
        <p>Chargement des données de l'événement...</p>
      )}
    </div>
  );
};

export default Vote;

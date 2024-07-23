import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api/api';

const Results: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await getEventById(id!);
        setEvent(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Failed to fetch results');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [id]);

  const isEventExpired = (limitDate: string) => {
    return new Date(limitDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Résultats de l'événement</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
          <p>Date limite: {new Date(event.limit_date).toLocaleDateString()}</p>
          <h3 className="text-xl font-bold mt-6">Résultats:</h3>
          {isEventExpired(event.limit_date) ? (
            <ul className="mt-4">
            {event.results.map((result: any, index: number) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{result.option}</span>
                  <span>{result.count} votes ({result.percentage.toFixed(2)}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
          ) : (
            <p className="text-yellow-500">Les résultats seront disponibles à la fin de l'événement.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;

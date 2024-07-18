import React, { useEffect, useState } from "react";
import { listEvents } from "../api/api";
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  //   const { user } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await listEvents();
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  const handleVoteClick = (eventId: string) => {
    navigate(`/vote/${eventId}`);
  };

  const handleResultsClick = (eventId: string) => {
    navigate(`/results/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Liste d'évènements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event: any) => (
          //log event data
          <div key={event.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
            <p>
              Date limite: {new Date(event.limit_date).toLocaleDateString()}
            </p>
            <p>
              {event.voted
                ? "Vous avez déjà voté"
                : "Vous n'avez pas encore voté"}
            </p>
            <div className="mt-4">
              {event.voted ? (
                <button
                  onClick={() => handleResultsClick(event.id)}
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  Voir résultats
                </button>
              ) : (
                <button
                  onClick={() => handleVoteClick(event.id)}
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  Voter
                </button>
              )}
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

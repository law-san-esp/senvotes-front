import React, { useEffect, useState } from "react";
import { listEvents } from "../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await listEvents();
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleVoteClick = (eventId: string) => {
    navigate(`/vote/${eventId}`);
  };

  const handleResultsClick = (eventId: string) => {
    navigate(`/results/${eventId}`);
  };

  const isEventExpired = (limitDate: string) => {
    return new Date(limitDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Liste d'évènements</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: any) => (
            <div
              key={event.id}
              className={`p-6 rounded-lg shadow-md ${
                isEventExpired(event.limit_date) ? 'bg-red-800' : 'bg-gray-800'
              }`}
            >
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
                {isEventExpired(event.limit_date) ? (
                  <button
                    onClick={() => handleResultsClick(event.id)}
                    className="bg-blue-600 px-4 py-2 rounded"
                  >
                    Voir résultats
                  </button>
                ) : (
                  <>
                    {event.voted ? (
                      <button
                        onClick={() => handleResultsClick(event.id)}
                        className="bg-blue-600 px-4 py-2 rounded"
                      >
                        Résultats non disponibles
                      </button>
                    ) : (
                      <button
                        onClick={() => handleVoteClick(event.id)}
                        className="bg-green-600 px-4 py-2 rounded"
                      >
                        Voter
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

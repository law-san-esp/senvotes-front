import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Verification from './pages/Verification';
import Dashboard from './pages/Dashboard';
import Vote from './pages/Vote';
import Admin from './pages/Admin';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const authContext = React.useContext(AuthContext);

  if (!authContext || !authContext.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verification" element={<Verification />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vote/:id"
              element={
                <ProtectedRoute>
                  <Vote />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </SnackbarProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

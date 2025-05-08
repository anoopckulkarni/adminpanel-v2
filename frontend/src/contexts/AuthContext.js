import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext();

// Create a custom hook to handle navigation
export const useAuthActions = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuthActions must be used within an AuthProvider');
  }
  
  const { setToken, setUser, setIsAuthenticated } = context;
  
  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    navigate('/login');
  }, [navigate, setToken, setUser, setIsAuthenticated]);
  
  return {
    ...context,
    logout
  };
};

// AuthProvider doesn't use Router hooks directly
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
          const response = await api.get('/api/auth/me');
          setUser(response.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error loading user:', error);
          setToken(null);
          setUser(null);
          setIsAuthenticated(false);
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  const login = async (identifier, password, verificationCode = null, userId = null) => {
    try {
      const payload = { identifier, password };
      if (verificationCode) {
        payload.token = verificationCode;
      }
      if (userId) {
        payload.userId = userId;
      }
      const response = await api.post('/api/auth/login', payload);
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      localStorage.removeItem('token');
      setUser(null);
      setIsAuthenticated(false);
      delete api.defaults.headers.common['Authorization'];
      throw error?.response?.data || error || new Error('Login failed');
    }
  };

  // No logout function here - it's provided by useAuthActions

  const contextValue = {
    token,
    user,
    isAuthenticated,
    loading,
    login,
    setToken,
    setUser,
    setIsAuthenticated
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Basic hook for auth state only (no navigation)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
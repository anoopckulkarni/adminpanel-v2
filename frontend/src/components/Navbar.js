import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // navigate('/login'); // Already handled in AuthContext
    } catch (error) {
      console.error('Error during logout:', error);
      // Optionally handle error
    }
  };

  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
        Admin Panel
      </Link>
      <div>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none' }}>
          Home
        </Link>
        {user && (
          <Link to="/dashboard" style={{ marginRight: '15px', textDecoration: 'none' }}>
            Dashboard
          </Link>
        )}
        {!user ? (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} style={{ padding: '8px 12px', cursor: 'pointer' }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
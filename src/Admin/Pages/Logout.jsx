

import React from 'react';

export default function Logout() {
  const handleLogout = (e) => {
    e.preventDefault();
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogout} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Logout</h1>
        <p>Are you sure you want to log out?</p>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
          Logout
        </button>
      </form>
    </div>
  );
}

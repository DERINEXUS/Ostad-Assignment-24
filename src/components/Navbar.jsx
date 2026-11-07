import React from 'react';
import useUserStore from '../store/useUserStore';

const Navbar = ({ totalUsers }) => {
  const favorites = useUserStore((state) => state.favorites);

  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <h2>User Management</h2>
      <div>
        <span>Total Users: {totalUsers} | </span>
        <span>Favorites: {favorites.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
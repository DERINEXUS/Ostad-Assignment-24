import React from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../store/useUserStore';

const UserCard = ({ user }) => {
  const { favorites, addFavorite, removeFavorite } = useUserStore();
  const isFavorite = favorites.some((fav) => fav.id === user.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(user.id);
    } else {
      addFavorite(user);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Link to={`/user/${user.id}`} style={{ padding: '5px 10px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
          View Details
        </Link>
        <button onClick={toggleFavorite} style={{ padding: '5px 10px', background: isFavorite ? '#dc3545' : '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
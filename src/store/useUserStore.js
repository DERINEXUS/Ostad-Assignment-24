import { create } from 'zustand';

// Helper to load initial state from localStorage
const getInitialFavorites = () => {
  const saved = localStorage.getItem('favoriteUsers');
  return saved ? JSON.parse(saved) : [];
};

const useUserStore = create((set) => ({
  favorites: getInitialFavorites(),

  addFavorite: (user) => set((state) => {
    const updatedFavorites = [...state.favorites, user];
    localStorage.setItem('favoriteUsers', JSON.stringify(updatedFavorites));
    return { favorites: updatedFavorites };
  }),

  removeFavorite: (userId) => set((state) => {
    const updatedFavorites = state.favorites.filter(u => u.id !== userId);
    localStorage.setItem('favoriteUsers', JSON.stringify(updatedFavorites));
    return { favorites: updatedFavorites };
  }),
}));

export default useUserStore;
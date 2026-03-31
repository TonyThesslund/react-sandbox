import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface StoreState {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  movies: [
    { id: 1, title: "The Matrix", watched: false },
    { id: 2, title: "Interstellar", watched: true },
    { id: 3, title: "Inception", watched: false },
    { id: 4, title: "The Godfather", watched: true },
  ],

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      ),
    })),
}));

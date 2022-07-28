import create from "zustand";

export const useMovies = create((set, get) => ({
  movies: [],
  emptyList: () => set({ movies: [] }),
  addFav: (movies1) => {
    const movies = get().movies;
    const existMovie = movies.find((movie) => movie.id === movies1.id);
    if (!existMovie) {
      set((state) => ({
        movies: [...state.movies, movies1],
      }));
    }
  },
  removeMovie: (id) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    })),
}));

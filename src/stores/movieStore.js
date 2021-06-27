import movies from "../movies";
import { makeAutoObservable } from "mobx";
class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  // TODO: refactor
  changeWatched = (movieId) => {
    this.movies.find((movie) => movieId === movie.id).watched =
      !this.movies.find((movie) => movieId === movie.id).watched;
  };

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };

  addMovie = (newMovie) => {
    this.movies.push({
      ...newMovie,
      id: this.movies.length,
      watched: false,
    });
  };
}
const movieStore = new MovieStore();
export default movieStore;

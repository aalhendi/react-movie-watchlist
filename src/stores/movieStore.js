import movies from "../movies";
import { makeAutoObservable } from "mobx";
class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }
}
const movieStore = new MovieStore();
export default movieStore;

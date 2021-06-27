import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import MoviesListWatched from "./components/MoviesListWatched";

function App() {
  return (
    <div>
      <AddMovie />
      <h1>Watch List</h1>
      <MoviesList />
      <h1>Watched Movies</h1>
      <MoviesListWatched />
    </div>
  );
}

export default App;

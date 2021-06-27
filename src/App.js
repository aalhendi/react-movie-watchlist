import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import MoviesListWatched from "./components/MoviesListWatched";

function App() {
  return (
    <div>
      <AddMovie />
      <MoviesList />
      <MoviesListWatched />
    </div>
  );
}

export default App;

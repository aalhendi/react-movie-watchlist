import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="flex-container row">
      <AddMovie />
      <div className="flex-child">
        <MoviesList className="flex-child" isWatched={false} />
      </div>
      <div className="flex-child">
        <MoviesList className="flex-child" isWatched={true} />
      </div>
    </div>
  );
}

export default App;

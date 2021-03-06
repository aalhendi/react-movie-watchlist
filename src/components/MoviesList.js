// Libraries
import { observer } from "mobx-react";
// Store and State
import movieStore from "../stores/movieStore";
import { useState } from "react";
//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MoviesList = (props) => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies.filter(
    (movie) => movie.watched === props.isWatched
  );

  const filteredMovieList = movieList
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);
  return (
    <div className="bordered">
      <h2>
        {props.isWatched ? "Watched " : "Watchlist "}
        {filteredMovieList.length === movieList.length
          ? `${filteredMovieList.length}`
          : `${filteredMovieList.length} out of ${movieList.length}`}
      </h2>
      <SearchBar setQuery={setQuery} />
      {filteredMovieList.length === 0 ? (
        <h3>Nothing found.</h3>
      ) : (
        filteredMovieList
      )}
    </div>
  );
};

export default observer(MoviesList);

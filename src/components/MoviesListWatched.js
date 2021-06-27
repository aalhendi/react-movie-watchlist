// Libraries
import { observer } from "mobx-react";
// Store and State
import movieStore from "../stores/movieStore";
import { useState } from "react";
//Components
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";

const MoviesListWatched = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies.filter((movie) => movie.watched === true);

  const filteredMovieList = movieList
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);
  return (
    <div>
      <h1>
        Watched List {`${filteredMovieList.length} out of ${movieList.length}`}
      </h1>
      <SearchBar setQuery={setQuery} />
      {filteredMovieList.length === 0 ? (
        <h3>Nothing found.</h3>
      ) : (
        filteredMovieList
      )}
    </div>
  );
};

export default observer(MoviesListWatched);

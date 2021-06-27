import React from "react";
import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const MoviesListWatched = () => {
  const movieList = movieStore.movies
    .filter((movie) => movie.watched === true)
    .map((movie) => <MovieItem movie={movie} />);
  return <div>{movieList}</div>;
};

export default observer(MoviesListWatched);

import React from "react";
import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const MoviesList = () => {
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem movie={movie} />
  ));
  return <div>{movieList}</div>;
};

export default observer(MoviesList);

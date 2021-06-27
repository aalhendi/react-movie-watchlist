import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const MoviesList = () => {
  const movieList = movieStore.movies
    .filter((movie) => movie.watched === false)
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);
  return <div>{movieList}</div>;
};

export default observer(MoviesList);

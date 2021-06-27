import movieStore from "../stores/movieStore";

const MovieItem = (props) => {
  const handleWatchButton = () => {
    movieStore.changeWatched(props.movie.id);
  };

  const handleDeleteButton = () => {
    movieStore.deleteMovie(props.movie.id);
  };
  return (
    <div>
      <h1>{props.movie.name}</h1>
      <button onClick={handleWatchButton}>
        {props.movie.watched ? "Unwatch" : "Watch"}
      </button>
      <button onClick={handleDeleteButton}>Delete</button>
    </div>
  );
};

export default MovieItem;

import movieStore from "../stores/movieStore";

const MovieItem = (props) => {
  const handleClick = () => {
    movieStore.changeWatched(props.movie.id);
  };
  return (
    <div>
      <h1>{props.movie.name}</h1>
      <button onClick={handleClick}>
        {props.movie.watched ? "Unwatch" : "Watch"}
      </button>
    </div>
  );
};

export default MovieItem;

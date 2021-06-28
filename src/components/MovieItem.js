import movieStore from "../stores/movieStore";

const MovieItem = (props) => {
  const handleWatchButton = () => {
    movieStore.changeWatched(props.movie.id);
  };

  const handleDeleteButton = () => {
    movieStore.deleteMovie(props.movie.id);
  };
  return (
    <div className="besideEachOther">
      <h5>{props.movie.name}</h5>
      <button
        onClick={handleWatchButton}
        className="btn btn-outline-success btn-sm ms-2"
      >
        {props.movie.watched ? "Unwatch" : "Watch"}
      </button>
      <button
        onClick={handleDeleteButton}
        className="btn btn-outline-danger btn-sm ms-2"
      >
        Delete
      </button>
    </div>
  );
};

export default MovieItem;

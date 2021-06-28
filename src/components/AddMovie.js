import { useState } from "react";
import movieStore from "../stores/movieStore";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    movieStore.addMovie(movie);
  };

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="movie name"
          onChange={handleChange}
          name="name"
          type="text"
          className="form-control mb-2"
        />
        <button className="btn btn-outline-success btn-sm">add</button>
      </form>
    </div>
  );
};

export default AddMovie;

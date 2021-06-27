import React from "react";

const MovieItem = (props) => {
  return (
    <div>
      <h1>{props.movie.name}</h1>
    </div>
  );
};

export default MovieItem;

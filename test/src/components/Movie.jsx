import React from "react";

const Movie = props => {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
    </>
  );
};

export default Movie;

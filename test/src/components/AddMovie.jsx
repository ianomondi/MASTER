import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    console.log(movies);
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <form className="from-group" onSubmit={addMovie}>
      <input
        type="text"
        className="form-control"
        onChange={updateName}
        name="name"
        value={name}
      />
      <input
        type="number"
        className="form-control"
        onChange={updatePrice}
        name="price"
        value={price}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddMovie;

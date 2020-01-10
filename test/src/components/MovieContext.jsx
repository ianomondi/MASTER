import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "GOT",
      price: "Ksh. 200",
      id: 3
    },
    {
      name: "the 100",
      price: "Ksh. 150",
      id: 123
    },
    {
      name: "walking dead",
      price: "Ksh. 200",
      id: 13
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

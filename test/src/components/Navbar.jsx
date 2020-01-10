import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Navbar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <li className="navbar-brand" href="#">
            Navbar
          </li>
          <li className="navbar-brand" href="#">
            list of movies
            <span className="badge badge-primary badge-pill">
              {movies.length}
            </span>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

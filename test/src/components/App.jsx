import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";
function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </>
  );
}
export default App;

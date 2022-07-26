import React, { useEffect } from "react";
import MoviesCard from "../component/MoviesCard";
import SearchBar from "./SearchBar";

const MoviesList = () => {
  return (
    <div>
      <SearchBar />
      <div className="Movie-main-block">
        <div className="row justify-content-start">
          <MoviesCard />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

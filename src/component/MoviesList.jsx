import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesData } from "../redux/movies/MoviesAction";
import MoviesCard from "../component/MoviesCard";
import SearchBar from "./SearchBar";

const MoviesList = () => {
  const movieData = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  // return
  // movieData.loading ? (
  //   <h2>Loading...</h2>
  // ) : movieData.error ? (
  //   <h2>{movieData.error}</h2>
  // ) : (
  return (
    <div>
      <SearchBar />
      <div className="Movie-main-block">
        <h2 className="ms-2">Trending</h2>
        <div className="row justify-content-center">
          <MoviesCard />
        </div>
      </div>
    </div>
  );
  // );
};

export default MoviesList;

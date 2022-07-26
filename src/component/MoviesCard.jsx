import React, { useState, useEffect, useMemo, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesData } from "../redux/movies/MoviesAction";
import { movieDetailData } from "../redux/movies/MoviesAction";
import Pagination from "./Pagination";

let PageSize = 8;

const MoviesCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const movieData = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return movieData.movies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {}, [dispatch]);

  const goToMovieDetaiPage = (data) => {
    navigate("/movie-detail");
    dispatch(movieDetailData(data));
  };
  const finaldata =
    currentTableData.length <= 0 && movieData.movies.length > 0
      ? movieData.movies.slice(0, 8)
      : movieData.movies.length <= 8
      ? movieData.movies
      : currentTableData;

  return movieData.loading ? (
    <h2>Loading...</h2>
  ) : movieData.error ? (
    <h2>{movieData.error}</h2>
  ) : (
    <Fragment>
      {finaldata.map((data) => {
        return (
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#d9d9d9",
            }}
            className="card custom-card-block col-md-3 mx-2"
            key={data.id}
            onClick={() => goToMovieDetaiPage(data)}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt={data.original_title}
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.original_title}</h5>
              <p className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <span className="rating-text"> {data.vote_average} / 10</span>
              </p>
            </div>
          </div>
        );
      })}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={movieData.movies.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Fragment>
  );
};

export default MoviesCard;

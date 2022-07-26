import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const detailData = useSelector((state) => state.movies.detailData);
  const navigate = useNavigate();

  const gobackToHome = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid h-100">
      <div className="row align-items-center h-100">
        <div className="col">
          <div className="row">
            <span onClick={gobackToHome} className="arrow-pointer">
              <i className="fa fa-long-arrow-left mb-4" aria-hidden="true"></i>
            </span>
          </div>
          <div className="row mb-2">
            <h1 className="font-title">{detailData.original_title}</h1>
          </div>
          <div className="row rating-block mb-2">
            <span className="rating-text">
              Rating:- {detailData.vote_average} / 10
            </span>
          </div>

          <div className="row overview-text mb-3">
            <p className="font-overview">{detailData.overview}</p>
          </div>

          <div className="row release-date-block mb-2">
            <div className="col release-date-text">Release Date</div>
            <div className="col release-date-value">
              {detailData.release_date}
            </div>
            <div className="col"></div>
          </div>

          <div className="row languages-block mb-2">
            <div className="col languages-text">Original Language</div>
            <div className="col release-date-value">
              {detailData.original_language === "en"
                ? "English"
                : detailData.original_language}
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500/${detailData.poster_path}`}
            alt={detailData.original_title}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

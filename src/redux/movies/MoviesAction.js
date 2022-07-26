import axios from "axios";
import {
  SET_LOADING_TRUE,
  GET_MOVIES_LIST,
  SET_ERROR_UPON_FAILURE,
  MOVIE_DETAIL_DATA,
} from "./MoviesTypes";
const API_KEY = "671442883af2adb87d718e07997f6d34&query";

export const fetchMoviesRequest = () => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: GET_MOVIES_LIST,
    payload: movies,
  };
};
export const fetchMoviesFailure = (error) => {
  return {
    type: SET_ERROR_UPON_FAILURE,
    payload: error,
  };
};

export const movieDetailData = (data) => {
  return {
    type: MOVIE_DETAIL_DATA,
    payload: data,
  };
};

export const fetchMoviesData = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        // response.data is the Movies
        const movies = response.data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};

export const fetchSearchedMovie = (searchStr) => {
  console.log(">>>> searchStr: ", searchStr);
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}=${searchStr}`
      )
      .then((response) => {
        // response.data is the Movies
        const movies = response.data.results;
        console.log(">>>> movies: ", movies);
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
